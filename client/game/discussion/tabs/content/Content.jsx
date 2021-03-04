import React, { Component, Fragment } from 'react'
import PoliceClues from '../../../../general/clues/PoliceClues';
import DiscussionInstructions from '../../../personalised-instructions/pages/subpage-elements/DiscussionInstructions';
import PresComStructText from '../../../personalised-instructions/pages/subpage-elements/PresComStructText';
import EarlySubmission from './early-submission/EarlySubmission';

export default class Content extends Component {
    render() {
        const { tabsStatus, game, round, player, stage } = this.props;

        //Get the tab status that is true
        const tabs = Object.keys(tabsStatus);
        let trueStatus = [];
        tabs.forEach(tab => {
            if (tabsStatus[tab]) {
                trueStatus.push(tab)
            }
        });

        if (trueStatus.length === 0) {
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
        } else if (trueStatus[0] === "instructions") {
            return (
                <div className="tab-content">
                    <h3 className="centred">Instructions Reminder</h3>
                    <DiscussionInstructions player={player} round={round} game={game} />
                </div>
            )
        } else if (trueStatus[0] === "police") {
            return (
                <div className="tab-content">
                    <h3 className="centred">Police Clues</h3>
                    <PoliceClues />
                </div>
            )
        } else if (trueStatus[0] === "comStruct") {
            return (
                <div className="tab-content">
                    <h3 className="centred">Communication Structure</h3>
                    <PresComStructText game={game} player={player} isDiscussion={true} />
                </div>
            )
        } else if (trueStatus[0] === "earlySub") {
            return (
                <div className="tab-content">
                    <h3 className="centred">Early Submission</h3>
                    <EarlySubmission stage={stage} player={player} round={round} />
                </div>
            )
        }
    }
}
