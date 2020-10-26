import React, { Component } from 'react';
import Matrix from '../templates/Matrix';
import { DisagreeAgree5 } from '../templates/scales/DisagreeAgree5';

export default class SuspicionDistrust extends Component {
    state = {
        name: "SuspicionDistrust"
    }

    render() {
        const { player, currentPage, previousPage, nextPage } = this.props;

        const questions = [
            "I am not sure the clues sent by some players were reliable",
            "I did not trust the information sent by some players",
            "I believe some players might have sent me false information",
            "It is not in some player’s best interests to send me accurate information",
            "None of the players had any incentive to not share information with me",
            "None of the players would have been motivated to deliberately share wrong information with me",
            "None of the players would have the incentive to refuse any information i asked for"
        ];
        const responseScale = DisagreeAgree5;

        let answers = player.get(this.state.name);

        return (
            <div>

                <Matrix
                    player={player}
                    playerVariable={this.state.name}
                    questions={questions}
                    responseScale={responseScale}
                />

                <br />

                <p className="button-holder">
                    <button type="button" onClick={previousPage} disabled={currentPage === 0}>
                        Previous
                    </button>
                    &emsp;
                    <button type="button" onClick={nextPage} disabled={Object.keys(answers).length !== questions.length}>
                        Next
                    </button>
                </p>
            </div>
        )
    }
}