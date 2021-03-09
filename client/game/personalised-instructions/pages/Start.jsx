import React, { Component } from 'react';
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'
import CluesTable from '../../../general/clues/CluesTable';
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
                        You will have <strong>15 minutes</strong> to read clues, make your own verdict, and read about discussion rules before entering a discussion with player {player1Initials} <img src={player1Avatar} style={mediumImage} />  and player {player2Initials} <img src={player2Avatar} style={mediumImage} />
                    </div>
                </div>
                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />

                <CluesTable {...this.props} />
            </div>
        )
    }
}

// Style variables
const mediumImage = {
    width: "2.5rem",
    height: "2.5rem",
    verticalAlign: "bottom"
};