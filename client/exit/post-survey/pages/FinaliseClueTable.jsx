import React, { Component } from 'react'
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'
import CluesTable from '../../../general/clues/CluesTable'

export default class FinaliseClueTable extends Component {
    state = {
        name: "FinaliseClueTable",
    }

    render() {
        const { player, pageDbIndex, min } = this.props;
        return (
            <div>
                <h3 style={{ marginTop: "0" }}>Finalise the clues you gathered</h3>
                <p>Below is the table all the unique clues you have collected. Please take some time to complete it and check your inputs.</p>
                <p><strong>Your inputs will determine how many clues you have acquired and how many points you have.</strong></p>

                <CluesTable {...this.props} />
                <br />

                <p>On the next page we will show you this information again, as well as the police clues, for you to make your final verdict.</p>

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
            </div>
        )
    }
}
