import React, { Component } from 'react'
import PoliceClues from "../../../general/clues/PoliceClues"

export default class PoliceInformation extends Component {
    render() {
        return (
            <div>
                <h3>Police Information</h3>

                <p>
                    <strong><u>Please note that the other two players also have this information.</u></strong> Please read through them carefully, but there is no need to write them down – they will be available later.
                    </p>

                <div><PoliceClues /></div>
            </div>
        )
    }
}
