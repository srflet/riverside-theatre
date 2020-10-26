import React, { Component } from 'react';

//Importing pages
import NumberClues from '../../../surveys/post-surveys/NumberClues';
import ManipCheckBrok1 from '../../../surveys/post-surveys/ManipCheckBrok1';
import ManipCheckBrok2 from '../../../surveys/post-surveys/ManipCheckBrok2';
import ManipCheckComp from '../../../surveys/post-surveys/ManipCheckComp';
import SuspicionDistrust from '../../../surveys/post-surveys/SuspicionDistrust';
import MotivationToShare from '../../../surveys/post-surveys/MotivationToShare';
import PreventInfo from '../../../surveys/post-surveys/PreventInfo';
import EaseInfoExchange from '../../../surveys/post-surveys/EaseInfoExchange';
import MotivationBrok from '../../../surveys/post-surveys/MotivationBrok';
import FinalWhodunit from '../../../surveys/post-surveys/FinalWhodunit';
import Demographics from '../../../surveys/post-surveys/Demographics';

export default class PostPages extends Component {
    render() {
        const { currentPage, player, game, previousPage, nextPage, onSubmit } = this.props;

        if (currentPage === 0) {
            return (
                <NumberClues player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 1) {
            return (
                <ManipCheckBrok1 player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 2) {
            return (
                <ManipCheckBrok2 player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 3) {
            return (
                <ManipCheckComp player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 4) {
            return (
                <SuspicionDistrust player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 5) {
            return (
                <MotivationToShare player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 6) {
            return (
                <PreventInfo player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 6) {
            return (
                <EaseInfoExchange player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 7) {
            return (
                <MotivationBrok player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 8) {
            return (
                <FinalWhodunit player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 9) {
            return (
                <Demographics player={player} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} onSubmit={onSubmit} />
            )
        }
    }
}
