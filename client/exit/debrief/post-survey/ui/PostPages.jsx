import React, { Component } from 'react';

// Importing pages
import NumberClues from '../pages/NumberClues';
import Communication from '../pages/Communication';
import PreventInfo from '../pages/Obstruction';
import Demographics from '../pages/Demographics';
import Facilitation from '../pages/Facilitation';
import Competition1 from '../pages/Competition1';
import CoalitionBuilding from '../pages/CoalitionBuilding';
import Instigation from '../pages/Instigation';
import Dealmaking from '../pages/Dealmaking';
import Obstruction from '../pages/Obstruction';
import ProposalWriting from '../pages/ProposalWriting';

// Based on the currentPage number (that the player can change with navigating buttons),
// show that page and passed down all the props.

export default class PostPages extends Component {
    render() {
        const { pageDbIndex, player } = this.props;
        let currentPage = player.get(pageDbIndex);

        if (currentPage === 1) {
            return (
                <NumberClues {...this.props} />
            )
        } else if (currentPage === 2) {
            return (
                <Communication {...this.props} />
            )
        } else if (currentPage === 3) {
            return (
                <Competition1 {...this.props} />
            )
        } else if (currentPage === 4) {
            return (
                <Dealmaking {...this.props} />
            )
        } else if (currentPage === 5) {
            return (
                <Obstruction {...this.props} />
            )
        } else if (currentPage === 6) {
            return (
                <CoalitionBuilding {...this.props} />
            )
        } else if (currentPage === 7) {
            return (
                <ProposalWriting {...this.props} />
            )
        } else if (currentPage === 8) {
            return (
                <Demographics {...this.props} />
            )
        }
    }
}
