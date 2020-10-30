import React, { Component } from 'react'
import CompetitionTip from './subpage-elements/CompetitionTip'
import IncentivesText from './subpage-elements/IncentivesText'

export default class Incentives extends Component {
    render() {
        const { player, game } = this.props;

        return (
            <div>
                <h3>Incentives</h3>
                <IncentivesText player={player} game={game} />
                <CompetitionTip player={player} game={game} />
                <br />
            </div>
        )
    }
}
