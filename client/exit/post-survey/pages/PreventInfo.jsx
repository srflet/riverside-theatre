import React, { Component } from 'react';

import MatrixQ from '../../../general/question-formats/MatrixQ';
import { DisagreeAgree5 } from '../../../general/question-formats/scales/DisagreeAgree5';
import { getConditionalsMulti } from '../../../general/question-formats/conditionals/getConditionals';

import ChangePageButtons from '../../../general/buttons/ChangePageButtons';

export default class PreventInfo extends Component {
    state = {
        name: "PreventInfo"
    }

    render() {
        const { player, pageDbIndex, min } = this.props;

        const questions = [
            "I tried to prevent specific other players from being able to get more clues",
            "I deliberately tried to make sure specific players could not get information from others",
            "I tried to prevent one player from sharing clues with the other player",
        ];
        const responseScale = DisagreeAgree5;

        // Prepare conditional for the 'next' button
        const disabledCondition = getConditionalsMulti(player, this.state.name, questions);

        return (
            <div>
                <p><strong>Based on the incentive structure in the game...</strong></p>

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

