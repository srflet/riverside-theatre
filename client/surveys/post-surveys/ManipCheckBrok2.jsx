import React, { Component } from 'react';
import Matrix from '../templates/Matrix';
import { DisagreeAgree5 } from '../templates/scales/DisagreeAgree5';

export default class ManipCheckBrok2 extends Component {
    state = {
        name: "ManipCheckBrok2"
    }

    render() {
        const { player, currentPage, previousPage, nextPage } = this.props;

        const questions = [
            "Everyone was able to talk to the other two players freely",
            "We could only talk to one another through an intermediary",
            "There was one person who acted as the “broker” in connecting the other two players",
            "I was able to only talk to one player, who was the intermediary that indirectly connects me with another player",
            "I was the intermediary that connected the other two players"
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
