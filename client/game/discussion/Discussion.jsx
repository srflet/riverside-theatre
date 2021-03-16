import React, { Component } from 'react';
import InformationLine from '../../general/information-line/InformationLine';
import Tabs from './tabs/Tabs';
import Chat from './chats/Chat';

export default class Discussion extends Component {
    render() {
        const { game } = this.props;
        const communication = JSON.parse(game.treatment.communication)

        return (
            <div>
                <InformationLine {...this.props} />
                <br />

                <p>
                    On this page you will find tabs to revisit important game information, and at the bottom of the page, you will find chat boxes to send messages to the other players (according to the communication structure shown to you).
                </p>

                <Tabs {...this.props} />
                <br />

                <div>
                    <div className="game-tip">
                        <span>
                            <strong><u>Game tip:</u></strong> Look at your position on the communication diagram, and think about how you might use your position to gain information. <strong>For example, try not to just ask for clues, but also consider “trading” clues with others.</strong>
                        </span>
                    </div>

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


