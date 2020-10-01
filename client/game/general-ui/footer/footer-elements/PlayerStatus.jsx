import React, { Component } from 'react'

export default class PlayerStatus extends Component {
    render() {
        return (
            <div style={playerStatusContainer}>
                <img src={this.props.player.get("avatar")} style={mediumImage} />
                <span>{
                    this.props.player.stage.submitted
                        ? <img src="/img/validation/check.png" style={mediumImage} />
                        : <img src="/img/validation/cross.png" style={mediumImage} />
                }</span>
            </div>
        )
    }
}


//Style variables
const mediumImage = {
    width: "2.5rem",
    height: "2.5rem",
    margin: "1rem 0"
};

const playerStatusContainer = {
    display: "flex",
    flexDirection: "row"
};