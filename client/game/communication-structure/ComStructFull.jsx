import React, { Component } from 'react';
import ComStructShape from "./ComStructShape.jsx";

export default class ComStructFull extends Component {
    render() {
        const { game, player } = this.props;

        return (
            <div>
                <ComStructShape game={game} player={player} />
            </div>
        )
    }
}
