import React, { Component } from 'react'
import PoliceClues from "../../../general/clues/PoliceClues"

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'

// SHOW THE POLICE CLUES TO THE PLAYER

export default class PoliceInformation extends Component {
    // Scroll to the top when this component starts
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min } = this.props;

        return (
            <div>
                <h3>Police Information</h3>

                <p>
                    <strong><u>Please note that the other two players also have this information.</u></strong> Please read through them carefully, but there is no need to write them down – they will be available later when needed.
                </p>

                <PoliceClues />
                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
            </div>
        )
    }
}
