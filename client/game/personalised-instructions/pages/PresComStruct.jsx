import React, { Component } from 'react';
import PresComStructText from './subpage-elements/PresComStructText';


export default class PresComStruct extends Component {
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { game, player } = this.props;

        return (
            <div>
                <h3>Communication Structure</h3>
                <PresComStructText game={game} player={player} isDiscussion={false} />
                <br />
            </div>
        )
    }
}
