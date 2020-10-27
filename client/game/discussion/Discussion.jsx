import React, { Component, Fragment } from 'react';

//Importing clues
import PoliceClues from '../../intro/PoliceClues';

//Importing communication structure
import ComStructFull from '../communication-structure/ComStructFull';

//Importing elements for chat
import Chat from './chats/Chat';

//Importing clues checkboxes
import CluesCheck from './clues-check/CluesCheck';

export default class Discussion extends Component {
    state = {
        whodunit: "",
        isInformationOpen: false,
        isPoliceOpen: false,
        isComStructOpen: false,
        isAnswerOpen: false,
    }

    handleWhodunitChange = e => {
        this.setState({ whodunit: e.currentTarget.value });
    }

    handleWhodunitSubmit = e => {
        e.preventDefault();

        if (this.state.whodunit === "") {
            alert("You need to select an answer");
        } else {
            this.props.player.set("whodunit", this.state.whodunit);
            this.props.player.stage.submit();
        }
    }

    clickOutsideInformation = () => {
        this.setState({
            isInformationOpen: false,
            isPoliceOpen: false,
            isComStructOpen: false,
        });
    }

    render() {
        const { round, game, player, stage } = this.props;

        if (stage.name == "discussion") {
            return (
                <div>
                    <div onClick={this.clickOutsideInformation}>
                        <div>
                            <br />
                            <div style={{ margin: "5px" }}>
                                <p>
                                    In this space, <strong><u>you will have 7-10 mins</u></strong> to chat with the other two players x and y to get as many cues as you can. After this discussion, we will kindly ask you to complete a short questionnaire and provide your final verdict.
                                </p>
                                <p>
                                    On the left hand side, you can see two tabs. You can click on the “Police Clues” tab to revisit the clues all three players share. You can click on the “Communication Structure” to revisit the diagram that describes who can talk to whom.
                                </p>
                                <p>
                                    To help you get started, <strong><u>we have created these “check boxes” about the unique clues everyone has.</u></strong> When you collect and unique clue from another player, you can check off that clue.
                                </p>
                                <br />
                                <p>
                                    <span className="game-tip">
                                        Game tip #1: These check boxes could help you get started. <strong><u>Look at what type of unique clues other players have and try to ask specific questions.</u></strong> You will need at least 4 unique clues from these 2 players to have a chance to find the guilty person.
                                    </span>
                                </p>
                                <br />
                                <p>
                                    <span className="game-tip">
                                        Game tip #2: Look at the communication diagram again, and <strong><u>think about how you may take advantage of your position and “bargain” with other players to get unique clues.</u></strong>
                                    </span>
                                </p>
                            </div>
                            <br />
                            <CluesCheck round={round} game={game} player={player} />

                        </div>
                        <div style={chatHolder}>
                            <Chat round={round} game={game} player={player} chatNb={1} />
                            <Chat round={round} game={game} player={player} chatNb={2} />
                            {game.treatment.brokerage !== "brok" ? <Chat round={round} game={game} player={player} chatNb={3} /> : ""}
                        </div>
                    </div>

                    <div>
                        <div className="discussion-information" style={{ display: this.state.isPoliceOpen ? "inline" : "none" }}>
                            <h3 className="centred">Police Clues</h3>
                            <PoliceClues />
                        </div>

                        <div className="discussion-information" style={{ display: this.state.isComStructOpen ? "inline" : "none" }}>
                            <h3 className="centred">Communication Structure</h3>
                            <ComStructFull round={round} game={game} player={player} />
                        </div>

                        <div className="side-button-holder" style={{
                            left: this.state.isInformationOpen ? "80%" : "0px"
                        }}>
                            <button onClick={() => this.setState({
                                isInformationOpen: !this.state.isPoliceOpen,
                                isPoliceOpen: !this.state.isPoliceOpen,
                                isComStructOpen: false,
                            })}>Police Clues {this.state.isPoliceOpen ? " <" : ">"}</button>
                            <button onClick={() => this.setState({
                                isInformationOpen: !this.state.isComStructOpen,
                                isComStructOpen: !this.state.isComStructOpen,
                                isPoliceOpen: false,
                            })}>Communication Structure and Clues {this.state.isComStructOpen ? " <" : ">"}</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (<Fragment></Fragment>)
        }
    }
}


//Style variables
const informationHolder = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "2rem",
    flexWrap: "wrap",
};

const chatHolder = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "2rem",
    flexWrap: "wrap",
};


