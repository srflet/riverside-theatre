import React, { Component } from 'react';

// Importing tabs
import Tabs from './tabs/Tabs';

// Footer
import Footer from '../../general/footer/Footer';

// Importing elements for chat
import Chat from './chats/Chat';

// Importing clues tracker
import CluesCheckGameTip from '../../general/tips-n-messages/CluesCheckGameTip';
import PresComStructTip from '../personalised-instructions/pages/subpage-elements/PresComStructTip';

export default class Discussion extends Component {
    render() {
        const { round, game, player, stage } = this.props;

        return (
            <div>
                <div className="footer">
                    <Footer game={game} player={player} stage={stage} />
                </div>
                <br />
                <p>
                    On this page you will find tabs to revisit important game information, and at the bottom of the page, you will find chat boxes to send messages to the other players (according to the communication structure shown to you).
                </p>
                <Tabs {...this.props} />
                <br />
                <div>
                    <CluesCheckGameTip />
                    <br />
                    <PresComStructTip />

                    <div style={chatHolder}>
                        <Chat round={round} game={game} player={player} chatNb={1} />
                        <Chat round={round} game={game} player={player} chatNb={2} />
                        {game.treatment.brokerage !== "brok" ? <Chat round={round} game={game} player={player} chatNb={3} /> : ""}
                    </div>

                </div>
            </div >
        )
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
    justifyContent: "center",
    marginTop: "2rem",
    flexWrap: "wrap",
};


