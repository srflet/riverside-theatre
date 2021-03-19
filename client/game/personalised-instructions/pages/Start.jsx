import React, { Component } from 'react'

// Functions to get information from the other players
import { returnOthersInitials, returnOthersAvatar } from '../../../general/helper-functions/returnPlayerInformation'

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'

// INFORM PARTICIPANTS ABOUT HOW THE INSTRUCTION STAGE WORKS

export default class Start extends Component {
    // Scroll to the top when this component starts
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min, game } = this.props;

        // Get player 1 (A or B) and player 2 (B or C) initials and avatars
        const [player1Initials, player2Initials] = returnOthersInitials(game, player);
        const [player1Avatar, player2Avatar] = returnOthersAvatar(game, player);

        return (
            <div>
                <br />

                <div className="game-instructions">
                    <div style={{ textAlign: "center" }}>
                        <span>You will have <strong>15 minutes</strong> to read clues, make your own verdict, and read about discussion rules before entering a discussion with player {player1Initials}</span>
                        <img src={player1Avatar} className="avatar-medium-textaligned" />
                        <span>and player {player2Initials}</span>
                        <img src={player2Avatar} className="avatar-medium-textaligned" />
                    </div>
                </div>

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
            </div>
        )
    }
}