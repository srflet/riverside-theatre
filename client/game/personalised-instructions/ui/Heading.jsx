import React, { Component } from 'react';
import Timer from '../../../general/footer/footer-elements/Timer';
import PlayerProfile from '../../../general/footer/footer-elements/PlayerProfile';

export default class Heading extends Component {
    render() {
        const { currentPage, player, game, stage } = this.props;

        return (
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                    <PlayerProfile player={player} />
                    <Timer stage={stage} />
                    <div>
                        <p><strong>Page:</strong></p>
                        <p style={{ textAlign: "center" }}>{currentPage} / 10</p>
                    </div>
                </div>
            </div>
        )
    }
}