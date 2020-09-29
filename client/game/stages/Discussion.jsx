import React, { Component, Fragment } from 'react';

//Importing clues
import PoliceClues from '../../intro/PoliceClues';
import PersonalClues from './clues/PersonalClues';

//Importing communication structure
import ComStructFull from './communication-structure/ComStructFull';

//Importing elements for chat
import Chat from './chats/Chat';
import NextStageButton from '../general-ui/NextStageButton';

export default class Discussion extends Component {
    render() {
        const { round, game, player, stage } = this.props;

        if (stage.name == "discussion") {
            return (
                <div>
                    <PoliceClues />
                    <PersonalClues player={player} />
                    <ComStructFull game={game} player={player} />
                    <Chat round={round} game={game} player={player} chatNb={1} />
                    <Chat round={round} game={game} player={player} chatNb={2} />
                    {game.treatment.brokerage !== "brok" ? <Chat round={round} game={game} player={player} chatNb={3} /> : ""}

                    {/* Just for production */}
                    <NextStageButton player={player} />
                </div>
            )
        } else {
            return (<Fragment></Fragment>)
        }
    }
}


//Style variables
const chatBox = {
    padding: "30px",
    maxHeight: "500px",
    overflowY: "scroll",
    borderWidth: "thin",
    borderStyle: "solid",
};