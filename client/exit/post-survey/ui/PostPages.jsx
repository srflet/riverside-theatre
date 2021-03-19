import React, { Component } from 'react';

// Importing pages
import NumberClues from '../pages/NumberClues';
import ManipCheckBrok1 from '../pages/ManipCheckBrok1';
import ManipCheckBrok2 from '../pages/ManipCheckBrok2';
import ManipCheckComp from '../pages/ManipCheckComp';
import SuspicionDistrust from '../pages/SuspicionDistrust';
import MotivationToShare from '../pages/MotivationToShare';
import PreventInfo from '../pages/PreventInfo';
import EaseInfoExchange from '../pages/EaseInfoExchange';
import MotivationBrok from '../pages/MotivationBrok';
import FinalWhodunit from '../pages/FinalWhodunit';
import Demographics from '../pages/Demographics';
import FinaliseClueTable from '../pages/FinaliseClueTable';

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
                <ManipCheckBrok1 {...this.props} />
            )
        } else if (currentPage === 5) {
            return (
                <ManipCheckBrok2 {...this.props} />
            )
        } else if (currentPage === 6) {
            return (
                <ManipCheckComp {...this.props} />
            )
        } else if (currentPage === 7) {
            return (
                <SuspicionDistrust {...this.props} />
            )
        } else if (currentPage === 8) {
            return (
                <MotivationToShare {...this.props} />
            )
        } else if (currentPage === 9) {
            return (
                <PreventInfo {...this.props} />
            )
        } else if (currentPage === 10) {
            return (
                <EaseInfoExchange {...this.props} />
            )
        } else if (currentPage === 11) {
            return (
                <MotivationBrok {...this.props} />
            )
        } else if (currentPage === 12) {
            return (
                <Demographics {...this.props} />
            )
        }
    }
}
