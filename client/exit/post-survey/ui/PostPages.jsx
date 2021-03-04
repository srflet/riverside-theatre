import React, { Component } from 'react';

//Importing pages
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

export default class PostPages extends Component {
    render() {
        const { currentPage, player, game, previousPage, nextPage, onSubmit } = this.props;

        if (currentPage === 0) {
            return (
                <FinalWhodunit game={game} player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 1) {
            return (
                <NumberClues player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 2) {
            return (
                <ManipCheckBrok1 player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 3) {
            return (
                <ManipCheckBrok2 player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 4) {
            return (
                <ManipCheckComp player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 5) {
            return (
                <SuspicionDistrust player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 6) {
            return (
                <MotivationToShare player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 7) {
            return (
                <PreventInfo player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 8) {
            return (
                <EaseInfoExchange player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 9) {
            return (
                <MotivationBrok player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 10) {
            return (
                <Demographics player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} onSubmit={onSubmit} />
            )
        }
    }
}
