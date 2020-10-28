import React, { Component, Fragment } from 'react';

//Importing discussion instructions
import DiscussionInstructions from '../personalised-instructions/pages/subpage-elements/DiscussionInstructions';
//Importing clues
import PoliceClues from '../../intro/PoliceClues';
//Importing communication structure
import ComStructFull from '../communication-structure/ComStructFull';

//Importing elements for chat
import Chat from './chats/Chat';

//Importing clues checkboxes
import CluesCheck from './clues-check/CluesCheck';
import EarlySubmission from './early-submission/EarlySubmission';

export default class Discussion extends Component {
    state = {
        whodunit: "",
        isInformationOpen: false,
        isInstructionsOpen: false,
        isPoliceOpen: false,
        isComStructOpen: false,
        isEarlySubmissionOpen: false
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
            isInstructionsOpen: false,
            isPoliceOpen: false,
            isComStructOpen: false,
            isEarlySubmissionOpen: false
        });
    }

    render() {
        const { round, game, player, stage } = this.props;

        if (stage.name == "discussion") {
            return (
                <div>
                    <div onClick={this.clickOutsideInformation}>

                        <CluesCheck round={round} game={game} player={player} />

                        <div style={chatHolder}>
                            <Chat round={round} game={game} player={player} chatNb={1} />
                            <Chat round={round} game={game} player={player} chatNb={2} />
                            {game.treatment.brokerage !== "brok" ? <Chat round={round} game={game} player={player} chatNb={3} /> : ""}
                        </div>
                    </div>

                    <div>
                        <div className="discussion-information" style={{ display: this.state.isInstructionsOpen ? "inline" : "none" }}>
                            <h3 className="centred">Instructions Reminder</h3>
                            <DiscussionInstructions player={player} round={round} game={game} />
                        </div>

                        <div className="discussion-information" style={{ display: this.state.isPoliceOpen ? "inline" : "none" }}>
                            <h3 className="centred">Police Clues</h3>
                            <PoliceClues />
                        </div>

                        <div className="discussion-information" style={{ display: this.state.isComStructOpen ? "inline" : "none" }}>
                            <h3 className="centred">Communication Structure and Clues</h3>
                            <ComStructFull round={round} game={game} player={player} />
                        </div>

                        <div className="discussion-information" style={{ display: this.state.isEarlySubmissionOpen ? "inline" : "none" }}>
                            <h3 className="centred">Early Submission</h3>
                            <EarlySubmission stage={stage} player={player} round={round} />
                        </div>

                        <div className="side-button-holder" style={{
                            left: this.state.isInformationOpen ? "80%" : "0px"
                        }}>
                            <button onClick={() => this.setState({
                                isInformationOpen: !this.state.isInstructionsOpen,
                                isInstructionsOpen: !this.state.isInstructionsOpen,
                                isPoliceOpen: false,
                                isComStructOpen: false,
                                isEarlySubmissionOpen: false,
                            })}>Instructions Reminder {this.state.isInstructionsOpen ? " <" : ">"}</button>

                            <button onClick={() => this.setState({
                                isInformationOpen: !this.state.isPoliceOpen,
                                isPoliceOpen: !this.state.isPoliceOpen,
                                isInstructionsOpen: false,
                                isComStructOpen: false,
                                isEarlySubmissionOpen: false,
                            })}>Police Clues {this.state.isPoliceOpen ? " <" : ">"}</button>

                            <button onClick={() => this.setState({
                                isInformationOpen: !this.state.isComStructOpen,
                                isComStructOpen: !this.state.isComStructOpen,
                                isInstructionsOpen: false,
                                isPoliceOpen: false,
                                isEarlySubmissionOpen: false,
                            })}>Communication Structure and Clues {this.state.isComStructOpen ? " <" : ">"}</button>

                            <button onClick={() => this.setState({
                                isInformationOpen: !this.state.isEarlySubmissionOpen,
                                isEarlySubmissionOpen: !this.state.isEarlySubmissionOpen,
                                isInstructionsOpen: false,
                                isPoliceOpen: false,
                                isComStructOpen: false,
                            })}>Early Submission {this.state.isEarlySubmissionOpen ? " <" : ">"}</button>
                        </div>
                    </div>
                </div >
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


