import React, { Component } from 'react';
import PresComStructInstructions from './PresComStructInstructions';
import PresComStructTip from './PresComStructTip';

export default class PresComStructText extends Component {
    render() {
        const { game, player, isDiscussion } = this.props;

        return (
            <div>
                <PresComStructInstructions game={game} player={player} isDiscussion={isDiscussion} />
                <br />
                <PresComStructTip />
                <br />
                {
                    isDiscussion
                        ? ""
                        : <p>
                            On the next page, to facilitate discussion, we will give you a hint of what unique clues the other two players have (e.g., “Player B knows the gender of the guilty person”).
                </p>
                }
            </div>
        )
    }
}

