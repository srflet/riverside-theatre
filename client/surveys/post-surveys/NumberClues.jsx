import React, { Component } from 'react'

export default class NumberClues extends Component {
    state = {
        name: "NumberClues"
    }

    handleChange = e => {
        this.props.player.set(this.state.name, e.currentTarget.value)
    }

    render() {
        const { player, currentPage, previousPage, nextPage } = this.props;

        const answers = player.get(this.state.name);

        return (
            <div>
                <p>How many pieces of unique clues did you manage to acquire from the other two players?</p>
                <select name="number of clues" onChange={e => this.handleChange(e)} value={answers}>
                    <option value="">Select your answer</option>
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
                    <button type="button" onClick={nextPage} disabled={answers === ""}>
                        Next
                    </button>
                </p>
            </div>
        )
    }
}
