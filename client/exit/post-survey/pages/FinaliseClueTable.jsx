import React, { Component } from 'react'

// Show the clue table again and ask participants to fill it in
import CluesTable from '../../../general/clues/CluesTable'

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'

export default class FinaliseClueTable extends Component {
    state = {
        name: "FinaliseClueTable",
    }

    // Scroll to the top when this component starts
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { player, pageDbIndex, min } = this.props;
        return (
            <div>
                <h3 style={{ marginTop: "0" }}>Finalize the clues you gathered</h3>
                <p>Below is the table all the unique clues you have collected. Please take some time to complete it and check your inputs.</p>
                <p><strong>Your inputs will determine how many clues you have acquired and how many points you have.</strong></p>
                <p>Please write your answers with the correct spelling so that we can easily calculate your points.</p>

                <CluesTable {...this.props} />
                <br />

                <p>On the next page we will show you this information again, as well as the police clues, for you to make your final verdict.</p>

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
            </div>
        )
    }
}
