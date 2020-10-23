import React, { Component, Fragment } from 'react';

//Importing clues
import PoliceClues from '../../intro/PoliceClues';

//Importing communication structure
import ComStructFull from '../communication-structure/ComStructFull';

//Importing elements for chat
import Chat from './chats/Chat';
import WhodunitQuestion from '../../surveys/whodunit/WhodunitQuestion';

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
                            <p style={{ margin: "5px" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet molestie ante ut placerat. Curabitur nec velit arcu. Proin sagittis porta ligula sit amet feugiat. Nunc molestie pharetra orci, a tristique tortor. Sed sodales risus at sapien ultricies scelerisque. Fusce id ornare diam, eu efficitur ipsum. Vivamus eleifend maximus lectus eget semper. Aenean vel velit non mauris rutrum suscipit a sollicitudin metus. Fusce pharetra ac purus ac interdum. In posuere mattis ultrices. Mauris sed laoreet ipsum.
                            </p>
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
                            <h3 className="centred">Structure and independent investigations</h3>
                            <ComStructFull round={round} game={game} player={player} />
                        </div>

                        <div className="discussion-information" style={{ display: this.state.isAnswerOpen ? "inline" : "none" }}>
                            <h3 className="centred">Give my answer in early</h3>
                            <WhodunitQuestion handleChange={this.handleWhodunitChange} />
                            <div className="button-holder">
                                <button onClick={this.handleWhodunitSubmit} disabled={player.get("whodunit") !== ""}>Give my answer</button>
                            </div>
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


