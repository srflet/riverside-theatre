import React, { Component } from 'react';
import PostBottonTip from '../ui/PostButtonTip';

export default class NumberClues extends Component {
    state = {
        name: "NumberClues"
    }

    handleChange = e => {
        let answers = this.props.player.get(this.state.name);
        answers[e.currentTarget.name] = e.currentTarget.value;
        this.props.player.set(this.state.name, answers);
    }

    render() {
        const { player, currentPage, previousPage, nextPage } = this.props;

        const answers = player.get(this.state.name);

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

                <p className="button-holder">
                    <button type="button" onClick={previousPage} disabled={currentPage === 0}>
                        Previous
                    </button>
                    &emsp;
                    <button type="button" onClick={nextPage} disabled={answers.got === "" || answers.used === ""}>
                        Next
                    </button>
                </p>
                <PostBottonTip />
            </div>
        )
    }
}
