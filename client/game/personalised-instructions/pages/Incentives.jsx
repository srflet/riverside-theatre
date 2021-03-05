import React, { Component } from 'react'
import IncentivesText from './subpage-elements/IncentivesText'
import CompetitionTip from './subpage-elements/CompetitionTip'
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'

export default class Incentives extends Component {
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min, game } = this.props;

        return (
            <div>
                <h3>Incentives</h3>
                <IncentivesText player={player} game={game} />
                <CompetitionTip player={player} game={game} />
                <br />

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
            </div>
        )
    }
}
