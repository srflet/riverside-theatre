import React, { Component } from 'react';
import CluesTableGameInstructions from '../../../general/tips-n-messages/CluesTableGameInstructions';
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'
import CluesTable from '../../../general/clues/CluesTable';

export default class ClueHints extends Component {
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min } = this.props;

        return (
            <div>
                <h3>Hints and keeping track of Clues</h3>

                <CluesTableGameInstructions />

                <br />

                <CluesTable {...this.props} />

                <br />

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />

            </div>
        )
    }
}