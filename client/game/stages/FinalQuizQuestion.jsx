import React, { Component, Fragment } from 'react';

export default class FinalQuizQuestion extends Component {

    state = { whodunit: "" }

    handleSubmit = e => {
        e.preventDefault();

        this.props.player.set("whodunit", this.state.whodunit);

        //End this stage for this player
        this.props.player.stage.submit();

    }

    handleChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value.trim().toLowerCase() });
    }

    render() {
        const { player, stage, game } = this.props;

        if (stage.name == "final_quiz_question") {
            return (
                <div>
                    <h2>Quiz - Questions</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet molestie ante ut placerat. Curabitur nec velit arcu. Proin sagittis porta ligula sit amet feugiat. Nunc molestie pharetra orci, a tristique tortor. Sed sodales risus at sapien ultricies scelerisque. Fusce id ornare diam, eu efficitur ipsum. Vivamus eleifend maximus lectus eget semper. Aenean vel velit non mauris rutrum suscipit a sollicitudin metus. Fusce pharetra ac purus ac interdum. In posuere mattis ultrices. Mauris sed laoreet ipsum.
                    </p>

                    <form onSubmit={this.handleSubmit}>
                        <p>
                            <label htmlFor="wodunit">Whodunit?</label>
                            <input
                                type="text"
                                dir="auto"
                                id="whodunit"
                                name="whodunit"
                                value={this.state.whodunit}
                                onChange={this.handleChange}
                                autoComplete="off"
                                required
                            />
                        </p>
                        {player.stage.submitted ?
                            <div className="button-holder"><button type="submit" disabled>Submit</button></div>
                            :
                            <div className="button-holder"><button type="submit">Submit</button></div>
                        }
                    </form>

                </div>
            )
        } else {
            return (<Fragment></Fragment>)
        }
    }
}
