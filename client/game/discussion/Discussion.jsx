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
        const communication = JSON.parse(game.treatment.communication)

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
                        {
                            communication.map((communicationPattern, index) => {
                                return (
                                    <Chat key={index} communicationPattern={communicationPattern} {...this.props} />
                                )
                            })
                        }
                    </div>

                </div>
            </div >
        )
    }
}

const chatHolder = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "2rem",
    flexWrap: "wrap",
};


