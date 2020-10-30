import React, { Component } from 'react';
import Matrix from '../templates/Matrix';
import { DisagreeAgree5 } from '../templates/scales/DisagreeAgree5';
import PostBottonTip from '../../exit/post-survey/ui/PostButtonTip';

export default class MotivationToShare extends Component {
    state = {
        name: "MotivationToShare"
    }

    render() {
        const { player, currentPage, previousPage, nextPage } = this.props;

        const questions = [
            "I did not want to give out my clues “easily” to certain players",
            "To maximize my chance at the bonus, I did not want to share my unique clues with others “for free”",
            "Unless I was able to get new clues from others, I did not want to share my unique clues with them because it would be a disadvantage to me",
            "Please select ‘Somewhat Disagree’",
            "Giving my unique clues to the other players without getting new clues back would be a mistake",
        ];
        const responseScale = DisagreeAgree5;

        let answers = player.get(this.state.name);

        return (
            <div>
                <p>Based on the incentive structure in the game...</p>

                <br />

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
                <PostBottonTip />
            </div>
        )
    }
}