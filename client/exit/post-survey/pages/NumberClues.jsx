import React, { Component } from 'react';

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons';

export default class NumberClues extends Component {
    state = {
        name: "NumberClues"
    }

    // Scroll to the top when this component starts
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    // Handle when participant changes their answer, update their answer
    handleChange = e => {
        const { player } = this.props
        const { name } = this.state

        // Get the players answers for this survey, if they don't have any, set an empty object
        let answers = player.get(name) ?? {}

        answers[e.currentTarget.name] = e.currentTarget.value;

        player.set(name, answers);
    }

    render() {
        const { player, pageDbIndex, min } = this.props;

        // Get the players answers for this survey, if they don't have any, set an empty object
        const answers = player.get(this.state.name) ?? {};

        return (
            <div>
                <p>How many unique clues did you manage to acquire from the other two players?</p>
                <select name="got" onChange={e => this.handleChange(e)} value={answers.got}>
                    <option value="">Select your answer</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>

                <br />
                <br />

                <p>How many of these clues did you use in making your final verdict?</p>
                <select name="used" onChange={e => this.handleChange(e)} value={answers.used}>
                    <option value="">Select your answer</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>

                <br />

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} disabledCondition={Object.keys(answers).length !== 2} />
            </div>
        )
    }
}
