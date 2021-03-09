import React, { Component } from 'react';

import MatrixQ from '../../../general/question-formats/MatrixQ';
import { DisagreeAgree5 } from '../../../general/question-formats/scales/DisagreeAgree5';
import { getConditionalsMulti } from '../../../general/question-formats/conditionals/getConditionals';

import ChangePageButtons from '../../../general/buttons/ChangePageButtons';

export default class MotivationToShare extends Component {
    state = {
        name: "MotivationToShare"
    }

    render() {
        const { player, pageDbIndex, min } = this.props;

        const questions = [
            "I did not want to give out my clues “easily” to certain players",
            "To maximize my chance at the bonus, I did not want to share my unique clues with others “for free”",
            "Unless I was able to get new clues from others, I did not want to share my unique clues with them because it would be a disadvantage to me",
            "Please select ‘Somewhat Disagree’",
            "Giving my unique clues to the other players without getting new clues back would be a mistake",
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