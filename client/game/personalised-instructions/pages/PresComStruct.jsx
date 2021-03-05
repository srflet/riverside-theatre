import React, { Component } from 'react';
import PresComStructText from './subpage-elements/PresComStructText';
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'

export default class PresComStruct extends Component {
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { game, player, pageDbIndex, min } = this.props;

        return (
            <div>
                <h3>Communication Structure</h3>
                <PresComStructText game={game} player={player} isDiscussion={false} />
                <br />
                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
            </div>
        )
    }
}
