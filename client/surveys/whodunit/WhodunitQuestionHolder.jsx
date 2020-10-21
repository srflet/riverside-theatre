import React, { Component, Fragment } from 'react';
import WhodunitQuestion from './WhodunitQuestion';

export default class WhodunitQuestionHolder extends Component {

    state = { whodunit: "" }

    handleWhodunitChange = e => {
        this.setState({ whodunit: e.currentTarget.value });
    }

    handleWhodunitSubmit = e => {
        e.preventDefault();

        if (this.state.whodunit === "") {
            alert("You need to select an answer");
        } else {
            this.props.player.set("whodunit", this.state.whodunit);
            this.props.player.stage.submit();
        }
    }

    render() {
        const { player, stage, game } = this.props;

        if (stage.name == "whodunit_questions") {

            if (player.get("whodunit") === "") {
                return (
                    <div>
                        <h2>Quiz - Questions</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet molestie ante ut placerat. Curabitur nec velit arcu. Proin sagittis porta ligula sit amet feugiat. Nunc molestie pharetra orci, a tristique tortor. Sed sodales risus at sapien ultricies scelerisque. Fusce id ornare diam, eu efficitur ipsum. Vivamus eleifend maximus lectus eget semper. Aenean vel velit non mauris rutrum suscipit a sollicitudin metus. Fusce pharetra ac purus ac interdum. In posuere mattis ultrices. Mauris sed laoreet ipsum.
                        </p>

                        <WhodunitQuestion handleChange={this.handleWhodunitChange} />
                        <div className="button-holder">
                            <button onClick={this.handleWhodunitSubmit} disabled={player.get("whodunit") !== ""}>Give my answer</button>
                        </div>
                    </div>
                )
            } else {

                if (!this.props.player.stage.submitted) {
                    this.props.player.stage.submit();
                }

                return (
                    <div>
                        <h2>Quiz - Questions</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet molestie ante ut placerat. Curabitur nec velit arcu. Proin sagittis porta ligula sit amet feugiat. Nunc molestie pharetra orci, a tristique tortor. Sed sodales risus at sapien ultricies scelerisque. Fusce id ornare diam, eu efficitur ipsum. Vivamus eleifend maximus lectus eget semper. Aenean vel velit non mauris rutrum suscipit a sollicitudin metus. Fusce pharetra ac purus ac interdum. In posuere mattis ultrices. Mauris sed laoreet ipsum.
                    </p>

                        <p>
                            Thank you for submitting your answer. Please wait until the other participants have also submitted their answer. Then, we will reveal the correct answer.
                    </p>
                    </div>
                )

            }

        } else {
            return (<Fragment></Fragment>)
        }
    }
}
