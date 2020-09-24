import React, { Component, Fragment } from 'react'

export default class Message extends Component {

    getSenderPlayer = () => {
        let currentPlayer = this.props.game.players.filter(player => {
            return player._id === this.props.message[0].sender;
        })

        return currentPlayer[0];
    }

    render() {

        //For some reason React would not let me pass an object, so I pass the object in an array and I need to access it now
        const message = this.props.message[0];
        const player = this.props.player;

        return (
            <div style={messageContainer}>
                <p style={headContainer}>
                    <img src={this.getSenderPlayer().get("avatar")} style={miniAvatar} />
                    &emsp;<span><strong>{this.getSenderPlayer().get("initials")}</strong></span>
                    &emsp;<span style={dateStyle}>{message.createdAt}</span>
                </p>
                <p>
                    <span style={messageStyle}>{message.text}</span>
                </p>

            </div >



        )
    }
}

//Style variables
const miniAvatar = {
    width: "2rem",
    height: "2rem",
    margin: "1rem 0"
};

const headContainer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline"
};

const dateStyle = {
    color: "grey",
};

const messageContainer = {
    padding: "2rem",
    marginBottom: "15px",
    backgroundColor: "rgb(73, 215, 211, 0.5)",
    borderRadius: "5px",
    overflowWrap: "break-word",
};

const messageStyle = {};