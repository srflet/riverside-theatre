import React, { Component } from 'react';

// Get all the elements to build the matrix
import MatrixQ from '../../../../general/question-formats/MatrixQ';
import { DisagreeAgree5 } from '../../../../general/question-formats/scales/DisagreeAgree5';
import { getConditionalsMulti } from '../../../../general/question-formats/conditionals/getConditionals';

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../../general/buttons/ChangePageButtons';


export default class Obstruction extends Component {
    state = {
        name: "PreventInfo"
    }

    // Scroll to the top when this component starts
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { player, pageDbIndex, min } = this.props;

        // Prepare the questions for this matrix
        const questions = [
            "Our team tried to prevent another team from being able to get more information ",
            "Our team deliberately tried to make sure specific information does not get to certain teams",
            "Our team tried to limit certain teams from getting information",
            "If you are paying attention, please select “strongly agree”",
            "Our team tried to obstruct information from flowing to another team"
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
                    head={"Please indicate the extent to which you agree with the following statements:"}
                />

                <br />

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} disabledCondition={disabledCondition} />
            </div>
        )
    }
}

