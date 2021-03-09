import React, { Component } from 'react'

export default class Competitor extends Component {
    render() {
        return (
            <div style={competitorStyle}>
                Competitor
            </div>
        )
    }
}

const competitorStyle = {
    backgroundColor: "white"
    , color: "red"
    , border: "1px solid red"
    , borderRadius: "5px"
    , padding: "0.4rem"
    , fontSize: "10pt"
}