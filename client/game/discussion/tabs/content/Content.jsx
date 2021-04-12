import React, { Component } from 'react'

// All the elements to show in the tabs
import { CluesTableGameInstructions1, CluesTableGameInstructions2 } from '../../../../general/tips-n-messages/CluesTableGameInstructions';
import CluesTable from '../../../../general/clues/CluesTable';
import PoliceClues from '../../../../general/clues/PoliceClues';
import EarlySubmission from './early-submission/EarlySubmission';
import ComStructShape from '../../../../general/communication-structure/ComStructShape';
import CompetitionIncentive from '../../../../general/tips-n-messages/CompetitionIncentive';

export default class Content extends Component {
    render() {
        const { tabsStatus, round, player, stage } = this.props;

        // Get the tab status that is true
        const activeTab = Object.keys(tabsStatus).filter(tab => {
            return tabsStatus[tab] === true
        })[0]

        // Based on what tab is true populate the contents with the appropriate contents
        if (activeTab === "competitionStructure") {
            return (
                <div className="tab-content" >
                    <h3 className="justify-center">Player Relations</h3>
                    <div className="justify-center"><ComStructShape {...this.props} showCompetition={true} /></div>
                    <br />
                    <CompetitionIncentive {...this.props} />
                </div>
            )
        } else if (activeTab === "cluesTable") {
            return (
                <div className="tab-content" >
                    <CluesTableGameInstructions1 />

                    <br />

                    <CluesTable {...this.props} />

                    <br />

                    <CluesTableGameInstructions2 />
                </div>
            )
        } else if (activeTab === "police") {
            return (
                <div className="tab-content">
                    <h3 className="justify-center">Police Clues</h3>
                    <PoliceClues />
                </div>
            )
        } else if (activeTab === "earlySub") {
            return (
                <div className="tab-content">
                    <h3 className="justify-center">Early Submission</h3>
                    <EarlySubmission stage={stage} player={player} round={round} />
                </div>
            )
        } else {
            // If no tab is important, show this message
            return (
                <div className="tab-content">
                    <p style={{
                        margin: "0",
                        padding: "0",
                        textAlign: "center",
                        fontSize: "12pt",
                    }}>
                        Click a tab to revisit important game information
                    </p>
                </div>
            )
        }
    }
}
