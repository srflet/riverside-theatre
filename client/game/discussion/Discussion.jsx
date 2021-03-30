import React, { Component } from 'react';
import InformationLine from '../../general/information-line/InformationLine';
import Tabs from './tabs/Tabs';
import Chat from './chats/Chat';

// HOLDS ALL THE ELEMENTS OF THE DISCUSSION

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

                <div className="game-tip">
                    <p>
                        <strong><u>Game Tip:</u></strong> Look at the competitive relationships between the players, and think about how you might use these relationships to gain information. <strong>For example, try not to just ask for clues, but also consider "trading" clues with others.</strong>
                    </p>
                    <p style={{ margin: "0px" }}>
                        Have a look at the "Clues Table" tab to see what sort of information the other players might have and think about how you might obtain that information.
                    </p>
                </div>

                {/* For each communication patter create a chat */}
                <div style={chatHolder}>
                    {
                        communication.map((communicationPattern, index) => {
                            return (
                                <Chat key={index} communicationPattern={communicationPattern} {...this.props} />
                            )
                        })
                    }
                </div>

            </div >
        )
    }
}

const chatHolder = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "2rem",
    flexWrap: "wrap",
};


