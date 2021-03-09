import React, { Component } from 'react';

import MatrixQ from '../../../general/question-formats/MatrixQ';
import { DisagreeAgree5 } from '../../../general/question-formats/scales/DisagreeAgree5';
import { getConditionalsMulti } from '../../../general/question-formats/conditionals/getConditionals';

import ChangePageButtons from '../../../general/buttons/ChangePageButtons';

export default class ManipCheckBrok2 extends Component {
    state = {
        name: "ManipCheckBrok2"
    }

    render() {
        const { player, pageDbIndex, min } = this.props;

        const questions = [
            "Everyone was able to talk to the other two players freely",
            "Not everyone was able to talk to everyone else directly",
            "There was one person who acted as the “bridge” in connecting the other two players",
            "I was only able to talk to one player, who was the “bridge” that indirectly connected me with another player",
            "I was the “bridge” that connected the other two players"
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
