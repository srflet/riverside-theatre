import React, { Component } from 'react';

export default class IntroDiscussion extends Component {
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {

        return (
            <div>
                <h3>Introducing the Discussion</h3>
                <p>
                    You have reported your verdict to Mr. Lee and he mentioned to you that <strong><u>the other two players, while they have the police clues, also have unique clues you don’t have.</u></strong> This made your firm realize that, in order to solve the case, it might be necessary for the three players to discuss the case together.
                </p>
                <p>
                    The firms you and the other players work for have arranged for the three of you to chat in the next phase of the game.
                </p>
                <div className="game-tip">
                    <strong><u>Game tip:</u></strong> The clues you currently have are likely insufficient to identify the guilty person. To have the best shot at successfully solving the game, you will need to get as many clues from the other two players as possible.
                </div>

            </div>
        )

    }
}
