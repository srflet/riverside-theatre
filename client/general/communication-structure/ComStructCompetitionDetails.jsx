import React, { Component, Fragment } from 'react'

export default class ComStructCompetitionDetails extends Component {
    render() {
        return (
            <Fragment>
                <polyline points="145,55 140,55 50,140 50,145" style={{ fill: "none", stroke: "red" }} />
                <text x="50" y="85" fill="red" textAnchor="middle" style={{ fontSize: "12pt" }}>Competition</text>
            </Fragment>
        )
    }
}
