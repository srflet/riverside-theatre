import React, { Component } from 'react';

// Importing the pages
import Start from '../pages/Start';
import IndependentInvestigation from '../pages/IndependentInvestigation';
import IntroDiscussion from '../pages/IntroDiscussion';
import Incentives from '../pages/Incentives'
import PresComStruct from '../pages/PresComStruct';
import InitialWhodunit from '../pages/InitialWhodunit';
import TestIncentives from '../pages/TestIncentives';
import TestComStruct from '../pages/TestComStruct';
import ClueHints from '../pages/ClueHints';
import DiscussionInstructionsPage from '../pages/DiscussionInstructionsPage';
import PoliceInformation from '../pages/PoliceInformation';
import SummaryClues from '../pages/SummaryClues';
import ComNComp from '../pages/ComNComp';

export default class Page extends Component {
    render() {
        const { player, pageDbIndex } = this.props;
        let currentPage = player.get(pageDbIndex);

        if (currentPage === 1) {
            return (
                <Start {...this.props} />
            )
        } else if (currentPage === 2) {
            return (
                <PoliceInformation {...this.props} />
            )
        } else if (currentPage === 3) {
            return (
                <IndependentInvestigation {...this.props} />
            )
        } else if (currentPage === 4) {
            return (
                <SummaryClues {...this.props} />
            )
        } else if (currentPage === 5) {
            return (
                <InitialWhodunit {...this.props} />
            )
        } else if (currentPage === 6) {
            return (
                <IntroDiscussion {...this.props} />
            )
        } else if (currentPage === 7) {
            return (
                <ComNComp {...this.props} />
            )
        } else if (currentPage === 8) {
            return (
                <TestIncentives {...this.props} />
            )
        } else if (currentPage === 9) {
            return (
                <PresComStruct {...this.props} />
            )
        } else if (currentPage === 10) {
            return (
                <TestComStruct {...this.props} />
            )
        } else if (currentPage === 11) {
            return (
                <ClueHints {...this.props} />
            )
        } else if (currentPage === 12) {
            return (
                <DiscussionInstructionsPage {...this.props} />
            )
        }
    }
}
