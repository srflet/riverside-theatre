import React, { Component } from 'react';
import MatrixQ from '../../../general/question-formats/MatrixQ';
import { DisagreeAgree5 } from '../../../general/question-formats/scales/DisagreeAgree5';
import PostBottonTip from '../ui/PostButtonTip';

export default class ManipCheckComp extends Component {
    state = {
        name: "ManipCheckComp"
    }

    render() {
        const { player, currentPage, previousPage, nextPage } = this.props;

        const questions = [
            "My chance at winning an Amazon gift card hinged on whether I performed better than a specific other player in the game",
            "I was in direct competition with another player in the game",
            "I had to outperform a specific other player to be able to get more points",
            "There was no competition at all among players",
        ];
        const responseScale = DisagreeAgree5;

        let answers = player.get(this.state.name);

        return (
            <div>

                <MatrixQ
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