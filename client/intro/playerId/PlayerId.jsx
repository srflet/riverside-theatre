import React, { Component } from 'react';
import { Centered } from "meteor/empirica:core";

export default class PlayerId extends Component {
    state = { id: "" };

    handleUpdate = event => {
        const { value, name } = event.currentTarget;
        this.setState({ [name]: value });
    };

    render() {
        const { handleNewPlayer } = this.props;
        const { id } = this.state;

        return (
            <Centered>
                <div className="new-player">
                    <form onSubmit={e => handleNewPlayer(e, id)}>
                        <h1>Identification</h1>

                        <p>
                            Please enter your UID:
                        </p>

                        <input
                            dir="auto"
                            type="text"
                            name="id"
                            id="id"
                            value={id}
                            onChange={this.handleUpdate}
                            placeholder="Enter your UID"
                            required
                            autoComplete="off"
                        />

                        <p className="button-holder">
                            <button type="submit">Submit</button>
                        </p>

                    </form>
                </div>
            </Centered>
        )
    }
}
