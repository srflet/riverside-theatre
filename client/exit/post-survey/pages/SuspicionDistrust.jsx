import React, { Component } from 'react';

import MatrixQ from '../../../general/question-formats/MatrixQ';
import { DisagreeAgree5 } from '../../../general/question-formats/scales/DisagreeAgree5';
import { getConditionalsMulti } from '../../../general/question-formats/conditionals/getConditionals';

import ChangePageButtons from '../../../general/buttons/ChangePageButtons';

export default class SuspicionDistrust extends Component {
    state = {
        name: "SuspicionDistrust"
    }

    render() {
        const { player, pageDbIndex, min } = this.props;

        const questions = [
            "I am not sure the clues sent by some players were reliable",
            "I did not trust the information sent by some players",
            "I believe some players might have sent me false information",
            "It is not in some player’s best interests to send me accurate information",
            "None of the players had any incentive to not share information with me",
            "None of the players would have been motivated to deliberately share wrong information with me",
            "None of the players would have the incentive to refuse any information I asked for"
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