import React, { Component } from 'react';

import MatrixQ from '../../../general/question-formats/MatrixQ';
import { DisagreeAgree5 } from '../../../general/question-formats/scales/DisagreeAgree5';
import { getConditionalsMulti } from '../../../general/question-formats/conditionals/getConditionals';

import ChangePageButtons from '../../../general/buttons/ChangePageButtons';

export default class ManipCheckComp extends Component {
    state = {
        name: "ManipCheckComp"
    }

    render() {
        const { player, pageDbIndex, min } = this.props;

        const questions = [
            "My chance at winning an Amazon gift card hinged on whether I performed better than a specific other player in the game",
            "I was in direct competition with another player in the game",
            "I had to outperform a specific other player to be able to get more points",
            "There was no competition at all among players",
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