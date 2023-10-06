import React, { Component } from 'react';
import InformationLine from '../../general/information-line/InformationLine';

import Chat from './chats/Chat';
import ChatTeam from './chats/ChatTeam';
import CollabEditor from '../../general/collab/CollabEditor';
import EarlySubmission from './EarlySubmission';
import CluesTable from '../../general/information/CluesTable';
import Tabs from './tabs/Tabs';





// HOLDS ALL THE ELEMENTS OF THE DISCUSSION

export default class Collaborate extends Component {
    render() {
        const { game , round, player, stage } = this.props;
        const teams = ["Red", "Blue", "Green"]
        const team = player.get("team")

        return (
            <div>
                <InformationLine {...this.props} />
                <br />

                <div className="game-instructions">
                    <p>
                    Now that you have finished the discussion phase, please take the next 14 mins to work together with your teammate to write down your action plan on the collaborative editor (like Google docs).
                    </p>
                    <p>
                        <strong><u>Please peridocially click <em>"Save"</em> to save your teams' work, especially before the timer finishes.</u></strong>
                    </p>
                    <p>
                    Remember, your proposal will be scored on <strong><u>innovativeness</u></strong>, which is most likely when you take into account diverse information and perspectives. 
                    </p>
                    
                </div>

                <br />


                <h2>Team Proposal:</h2>

                {/* For each communication patter create a chat */}
                
                <div className = "collab-n-chat">

                    <CollabEditor team={team} {...this.props} />   

                    <div style={chatHolder}>
                        {
                            teams.map((team, index) => {
                                return (
                                    <ChatTeam key={"Team" + index} team={team} type="team" {...this.props} />
                                )
                            })
                            
                        }          
                    </div>
                </div>

                <br />

                <p>
                To help with your writing, you will continue to have access to the information table.
                </p>
                
                <br />
                <Tabs {...this.props} />

                {/* <div className="tab-content">
                    <h3 className="justify-center">Early Submission</h3>
                    <EarlySubmission stage={stage} player={player} round={round} />
                </div> */}

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
    width: "30%",
    height: "100%"
};


