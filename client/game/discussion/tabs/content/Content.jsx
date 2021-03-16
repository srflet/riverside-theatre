import React, { Component } from 'react'
import CluesTable from '../../../../general/clues/CluesTable';
import PoliceClues from '../../../../general/clues/PoliceClues';
import CluesCheckGameInstructions from '../../../../general/tips-n-messages/CluesCheckGameInstructions';
import DiscussionInstructions from '../../../personalised-instructions/pages/subpage-elements/DiscussionInstructions';
import PresComStructText from '../../../personalised-instructions/pages/subpage-elements/PresComStructText';
import EarlySubmission from './early-submission/EarlySubmission';

export default class Content extends Component {
    render() {
        const { tabsStatus, game, round, player, stage } = this.props;

        //Get the tab status that is true
        const activeTab = Object.keys(tabsStatus).filter(tab => {
            return tabsStatus[tab] === true
        })[0]

        if (activeTab === "cluesTable") {
            return (
                <div className="tab-content" >
                    <CluesCheckGameInstructions />
                    <br />
                    <CluesTable {...this.props} />
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
