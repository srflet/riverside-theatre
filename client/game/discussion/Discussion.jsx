import React, { Component } from 'react';

// Importing tabs
import Tabs from './tabs/Tabs';

// Import information line
import InformationLine from '../../general/information-line/InformationLine';

// Importing elements for chat
import Chat from './chats/Chat';

// Importing clues tracker
import CluesCheckGameTip from '../../general/tips-n-messages/CluesCheckGameTip';
import PresComStructTip from '../personalised-instructions/pages/subpage-elements/PresComStructTip';


export default class Discussion extends Component {
    render() {
        const { game, player, stage } = this.props;
        const communication = JSON.parse(game.treatment.communication)

        return (
            <div>
                <InformationLine game={game} player={player} stage={stage} />
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


