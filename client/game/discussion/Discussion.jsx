import React, { Component, Fragment } from 'react';

//Importing clues
import PoliceClues from '../../intro/PoliceClues';

//Importing communication structure
import ComStructFull from '../communication-structure/ComStructFull';

//Importing elements for chat
import Chat from './chats/Chat';
import NextStageButton from '../general-ui/NextStageButton';
import WhodunitQuestion from '../../surveys/whodunit/WhodunitQuestion';

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

    render() {
        const { round, game, player, stage } = this.props;

        if (stage.name == "discussion") {
            return (
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

                    <div style={chatHolder}>
                        <Chat round={round} game={game} player={player} chatNb={1} />
                        <Chat round={round} game={game} player={player} chatNb={2} />
                        {game.treatment.brokerage !== "brok" ? <Chat round={round} game={game} player={player} chatNb={3} /> : ""}
                    </div>

                    <div className="side-button-holder" style={{
                        left: this.state.isInformationOpen ? "1000px" : "0px"
                    }}>
                        <button onClick={() => this.setState({
                            isInformationOpen: !this.state.isPoliceOpen,
                            isPoliceOpen: !this.state.isPoliceOpen,
                            isComStructOpen: false,
                            isAnswerOpen: false,
                        })}>Police Clues {this.state.isPoliceOpen ? " <" : ">"}</button>
                        <button onClick={() => this.setState({
                            isInformationOpen: !this.state.isComStructOpen,
                            isComStructOpen: !this.state.isComStructOpen,
                            isPoliceOpen: false,
                            isAnswerOpen: false,
                        })}>Communication Structure and Clues {this.state.isComStructOpen ? " <" : ">"}</button>
                        <button onClick={() => this.setState({
                            isInformationOpen: !this.state.isAnswerOpen,
                            isAnswerOpen: !this.state.isAnswerOpen,
                            isPoliceOpen: false,
                            isComStructOpen: false,
                        })}>Give my answer in early {this.state.isAnswerOpen ? " <" : ">"}</button>
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


