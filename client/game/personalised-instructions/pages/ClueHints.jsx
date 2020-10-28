import React, { Component } from 'react';
import ComStructFull from '../../communication-structure/ComStructFull';

export default class ClueHints extends Component {
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { round, game, player } = this.props;

        return (
            <div>
                <h3>Hints about Clues</h3>

                <p>
                    Below we show you, in addition to the communication structure, what unique clues you have and <strong><u>what unique clues the other two players have.</u></strong>
                </p>
                <p>
                    For instance, we show you that the other player may know the gender of the guilty person. We provide this information such that you can ask specific questions to each player.
                </p>
                <p>
                    You do not have to write this down because we will show you them again on the next page when you enter the discussion phase.
                </p>

                <div className="centred">
                    <ComStructFull round={round} game={game} player={player} />
                </div>
            </div>
        )
    }
}