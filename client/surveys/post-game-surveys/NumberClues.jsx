import React, { Component } from 'react'

export default class NumberClues extends Component {
    static stepName = "NumberClues";

    render() {
        const { player, steps, hasNext, hasPrev, onNext } = this.props;

        return (
            <div>
                <p>How many pieces of unique clues did you manage to acquire from the other two players?</p>
                <select name="number of clues" onChange={e => this.handleChange(e)} required>
                    <option value="">Select your answer</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
        )
    }
}
