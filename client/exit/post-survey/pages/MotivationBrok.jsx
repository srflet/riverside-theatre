import React, { Component } from 'react';

import MatrixQ from '../../../general/question-formats/MatrixQ';
import { DisagreeAgree5 } from '../../../general/question-formats/scales/DisagreeAgree5';
import { getConditionalsMulti } from '../../../general/question-formats/conditionals/getConditionals';

import ChangePageButtons from '../../../general/buttons/ChangePageButtons';

export default class MotivationBrok extends Component {
    state = {
        name: "MotivationBrok"
    }

    render() {
        const { player, pageDbIndex, min } = this.props;

        const questions = [
            "I was motivated to “make deals” with others so that I could acquire new clues",
            "I only shared clues with others when I could get valuable clues back from them",
            "I wanted to take advantage of my position among the three players to maximize how many clues I could gather",
            "I tried to “broker” deals with the other 2 parties so that I could benefit from trading information between them",
            "I tried “playing one player off the other” so that I could get additional clues"
        ];
        const responseScale = DisagreeAgree5;

        // Prepare conditional for the 'next' button
        const disabledCondition = getConditionalsMulti(player, this.state.name, questions);

        return (
            <div>

                <MatrixQ
                    player={player}
                    dbIndex={this.state.name}
                    questions={questions}
                    responseScale={responseScale}
                    head={"Please rate how much you agree with each statement"}
                />

                <br />

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} disabledCondition={disabledCondition} />
            </div>
        )
    }
}