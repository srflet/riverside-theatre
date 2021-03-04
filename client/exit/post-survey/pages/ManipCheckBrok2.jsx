import React, { Component } from 'react';
import MatrixQ from '../../../general/question-formats/MatrixQ';
import { DisagreeAgree5 } from '../../../general/question-formats/scales/DisagreeAgree5';
import PostBottonTip from '../ui/PostButtonTip';

export default class ManipCheckBrok2 extends Component {
    state = {
        name: "ManipCheckBrok2"
    }

    render() {
        const { player, currentPage, previousPage, nextPage } = this.props;

        const questions = [
            "Everyone was able to talk to the other two players freely",
            "Not everyone was able to talk to everyone else directly",
            "There was one person who acted as the “bridge” in connecting the other two players",
            "I was only able to talk to one player, who was the “bridge” that indirectly connected me with another player",
            "I was the “bridge” that connected the other two players"
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
