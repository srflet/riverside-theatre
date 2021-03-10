import React, { Component } from 'react';
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'
import { returnOthersInitials, returnOthersAvatar } from '../../../general/helper-functions/returnPlayerInformation';

export default class Start extends Component {
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min, game } = this.props;

        const [player1Initials, player2Initials] = returnOthersInitials(game, player);
        const [player1Avatar, player2Avatar] = returnOthersAvatar(game, player);

        return (
            <div>
                <br />
                <div className="game-instructions">
                    <div style={{ textAlign: "center" }}>
                        <span>You will have <strong>15 minutes</strong> to read clues, make your own verdict, and read about discussion rules before entering a discussion with player {player1Initials}</span>
                        <img src={player1Avatar} className="avatar-medium" />
                        <span>and player {player2Initials}</span>
                        <img src={player2Avatar} className="avatar-medium" />
                    </div>
                </div>
                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
            </div>
        )
    }
}