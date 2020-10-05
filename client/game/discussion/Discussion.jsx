import React, { Component, Fragment } from 'react';

//Importing clues
import PoliceClues from '../../intro/PoliceClues';
import PersonalClues from '../clues/PersonalClues';

//Importing communication structure
import ComStructFull from '../communication-structure/ComStructFull';

//Importing elements for chat
import Chat from './chats/Chat';
import NextStageButton from '../general-ui/NextStageButton';

export default class Discussion extends Component {
    render() {
        const { round, game, player, stage } = this.props;

        if (stage.name == "discussion") {
            return (
                <div>
                    <div style={informationHolder}>
                        <div style={{ marginTop: "2rem", }}>
                            <PoliceClues />
                        </div>

                        <div style={{ marginTop: "2rem", }}>
                            <ComStructFull game={game} player={player} />
                        </div>

                    </div>

                    <div style={chatHolder}>
                        <Chat round={round} game={game} player={player} chatNb={1} />
                        <Chat round={round} game={game} player={player} chatNb={2} />
                        {game.treatment.brokerage !== "brok" ? <Chat round={round} game={game} player={player} chatNb={3} /> : ""}
                    </div>


                    {/* Just for production */}
                    <NextStageButton player={player} game={game} />
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


