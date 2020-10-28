import React, { Component } from 'react'

export default class Heading extends Component {
    render() {
        return (
            <div>
                <br />
                { this.props.currentPage === 0
                    ? <div className="game-tip">
                        <span><strong>Note:</strong> From now on you playing simultaneously with two other players. <br />
                    There is useful information at the top of this page: <br />
                    - A player profile. Each player is represented by an avatar (randomly selected) and their provided screen name.
                    - A player status. When a player has finished a phase their cross will turn into a tick. Only when every player has a tick will you all move on to the next phase. <br />
                    - A timer. <strong>You will have 10 minutes to read these instructions</strong></span>
                    </div>
                    : ""}
                <h2>Instructions</h2>
                <p>
                    Please read through all the pages of these instructions carefully.
                </p>

            </div>
        )
    }
}
