import React, { Component } from 'react'
import PoliceClues from "../../../general/clues/PoliceClues"
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'

export default class PoliceInformation extends Component {
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
