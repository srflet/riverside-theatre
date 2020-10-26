import React, { Component } from 'react';
import Matrix from '../templates/Matrix';
import { DisagreeAgree5 } from '../templates/scales/DisagreeAgree5';

export default class MotivationBrok extends Component {
    state = {
        name: "MotivationBrok"
    }

    render() {
        const { player, currentPage, previousPage, nextPage } = this.props;

        const questions = [
            "I was motivated to “make deals” with others so that I could acquire new clues",
            "I only shared clues with others when I could get valuable clues back from them",
            "I wanted to take advantage of my position among the three players to maximize how many clues I could gather",
            "I tried to “broker” deals with the other 2 parties so that I could benefit from transferring information between them",
            "I tried “playing one player off the other” so that I could get additional clues"
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