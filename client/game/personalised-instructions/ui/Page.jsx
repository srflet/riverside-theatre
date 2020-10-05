import React, { Component } from 'react'

//Importing the pages
import IndependentInvestigation from '../pages/IndependentInvestigation';
import SummaryClues from '../pages/SummaryClues';
import IntroDiscussion from '../pages/IntroDiscussion';
import Incentives from '../pages/Incentives'
import PresComStruct from '../pages/PresComStruct';

export default class Page extends Component {
    render() {
        const { currentPage, player, game } = this.props;

        if (currentPage === 0) {
            return (
                <IndependentInvestigation player={player} />
            )
        } else if (currentPage === 1) {
            return (
                <SummaryClues player={player} />
            )
        } else if (currentPage === 2) {
            return (
                <IntroDiscussion />
            )
        } else if (currentPage === 3) {
            return (
                <Incentives player={player} game={game} />
            )
        } else if (currentPage === 4) {
            return (
                <PresComStruct player={player} game={game} />
            )
        }
    }
}
