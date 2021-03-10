import React, { Component } from 'react'

export default class Alert extends Component {
    closeAlert = e => {
        const { round } = this.props;
        round.set("alert", false)
    }

    render() {
        return (
            <div style={shadedPage}>
                <div style={alert}>
                    <p><strong>There are only two minutes left!</strong></p>
                    <p className="button-holder"><button onClick={this.closeAlert}>Ok</button></p>
                </div>
            </div >
        )
    }
}

// Style variables
const shadedPage = {
    position: "absolute"
    , backgroundColor: "rgb(255, 255, 255, 0.7)"
    , zIndex: "1"
    , width: "100%"
    , height: "100%"

    , display: "flex"
    , justifyContent: "center"
    , alignItems: "center"
}

const alert = {
    backgroundColor: "rgb(250, 250, 250)"
    , width: "400px"
    , height: "250px"
    , border: "1px solid black"
    , borderRadius: "1rem"

    , display: "flex"
    , flexDirection: "column"
    , justifyContent: "center"
    , alignItems: "center"
}