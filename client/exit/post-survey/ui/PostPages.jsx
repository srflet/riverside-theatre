import React, { Component } from 'react';

// Importing pages
import NumberClues from '../pages/NumberClues';
import SuspicionDistrust from '../pages/SuspicionDistrust';
import PreventInfo from '../pages/PreventInfo';
import FinalWhodunit from '../pages/FinalWhodunit';
import Demographics from '../pages/Demographics';
import FinaliseClueTable from '../pages/FinaliseClueTable';
import Facilitation from '../pages/Facilitation';
import Competition1 from '../pages/Competition1';
import Competition2 from '../pages/Competition2';
import CoalitionBuilding from '../pages/CoalitionBuilding';
import Instigation from '../pages/Instigation';
import Dealmaking from '../pages/Dealmaking';

// Based on the currentPage number (that the player can change with navigating buttons),
// show that page and passed down all the props.

export default class PostPages extends Component {
    render() {
        const { pageDbIndex, player } = this.props;
        let currentPage = player.get(pageDbIndex);

        if (currentPage === 1) {
            return (
                <FinaliseClueTable {...this.props} />
            )
        } else if (currentPage === 2) {
            return (
                <FinalWhodunit {...this.props} />
            )
        } else if (currentPage === 3) {
            return (
                <NumberClues {...this.props} />
            )
        } else if (currentPage === 4) {
            return (
                <Competition1 {...this.props} />
            )
        } else if (currentPage === 5) {
            return (
                <Competition2 {...this.props} />
            )
        } else if (currentPage === 6) {
            return (
                <SuspicionDistrust {...this.props} />
            )
        } else if (currentPage === 7) {
            return (
                <CoalitionBuilding {...this.props} />
            )
        } else if (currentPage === 8) {
            return (
                <Instigation {...this.props} />
            )
        } else if (currentPage === 9) {
            return (
                <PreventInfo {...this.props} />
            )
        } else if (currentPage === 10) {
            return (
                <Dealmaking {...this.props} />
            )
        } else if (currentPage === 11) {
            return (
                <Facilitation {...this.props} />
            )
        } else if (currentPage === 12) {
            return (
                <Demographics {...this.props} />
            )
        }
    }
}
