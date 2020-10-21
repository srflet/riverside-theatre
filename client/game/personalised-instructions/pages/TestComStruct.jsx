import React, { Component } from 'react'

export default class TestComStruct extends Component {
    state = { sum: "", horse: "" };

    handleChange = e => {
        const element = e.currentTarget;
        this.setState({ [element.name]: element.value.trim().toLowerCase() });
    };

    handleSubmit = () => {
        if (this.state.sum !== "4" || this.state.horse !== "white") {
            alert("Incorrect! Read the instructions, and please try again.");
        } else {
            this.props.player.stage.submit();
        }
    };

    render() {
        const { previousPage, nextPage } = this.props;
        const { sum, horse } = this.state;
        return (
            <div>
                <div className="quiz">
                    <h3> Quiz About the Communication Structure</h3>
                    <p>
                        Please carefully answer the following comprehension questions. You need to answer each question correctly before you can continue on to the next phase of the study. You can navigate back to reread the instructions if you need.
                  </p>
                    <p>
                        <label htmlFor="sum">What is 2+2?</label>
                        <input
                            type="text"
                            dir="auto"
                            id="sum"
                            name="sum"
                            placeholder="e.g. 3"
                            value={sum}
                            onChange={this.handleChange}
                            autoComplete="off"
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="horse">
                            What color was Napoleon's white horse?
                          </label>
                        <input
                            type="text"
                            dir="auto"
                            id="horse"
                            name="horse"
                            placeholder="e.g. brown"
                            value={horse}
                            onChange={this.handleChange}
                            autoComplete="off"
                            required
                        />
                    </p>

                    <p className="button-holder">
                        <button type="button" onClick={previousPage}>
                            Previous
                        </button>
                        &emsp;
                        <button type="button" onClick={this.handleSubmit} disabled={this.props.player.stage.submitted}>
                            Submit answers and finish this stage
                        </button>
                    </p>
                </div>
            </div>
        )
    }
}
