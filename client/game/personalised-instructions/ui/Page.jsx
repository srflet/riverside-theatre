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

export default class Page extends Component {
    render() {
        const { currentPage, scrollToTop } = this.props;

        if (currentPage === 1) {
            return (
                <Start {...this.props} />
            )
        } else if (currentPage === 2) {
            return (
                <IndependentInvestigation {...this.props} />
            )
        } else if (currentPage === 3) {
            return (
                <InitialWhodunit {...this.props} />
            )
        } else if (currentPage === 4) {
            return (
                <IntroDiscussion scrollToTop={scrollToTop} />
            )
        } else if (currentPage === 5) {
            return (
                <Incentives {...this.props} />
            )
        } else if (currentPage === 6) {
            return (
                <TestIncentives {...this.props} />
            )
        } else if (currentPage === 7) {
            return (
                <PresComStruct {...this.props} scrollToTop={scrollToTop} />
            )
        } else if (currentPage === 8) {
            return (
                <TestComStruct {...this.props} />
            )
        } else if (currentPage === 9) {
            return (
                <ClueHints {...this.props} scrollToTop={scrollToTop} />
            )
        } else if (currentPage === 10) {
            return (
                <DiscussionInstructionsPage {...this.props} />
            )
        }
    }
}
