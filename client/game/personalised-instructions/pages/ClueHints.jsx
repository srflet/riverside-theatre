import React, { Component } from 'react';

// Present the clues table and its instructions to the participant
import { CluesTableGameInstructions1, CluesTableGameInstructions2 } from '../../../general/tips-n-messages/CluesTableGameInstructions';
import CluesTable from '../../../general/clues/CluesTable';

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'

export default class ClueHints extends Component {
    // Scroll to the top when this component starts
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min } = this.props;

        return (
            <div>
                <h3>Hints and keeping track of Clues</h3>

                <CluesTableGameInstructions1 />

                <br />

                <CluesTable {...this.props} />

                <br />

                <CluesTableGameInstructions2 />

                <br />

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />

            </div>
        )
    }
}