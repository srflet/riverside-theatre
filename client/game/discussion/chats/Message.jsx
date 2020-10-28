import React, { Component, Fragment } from 'react'

export default class Message extends Component {

    getSenderPlayer = () => {
        let senderPlayer = this.props.game.players.filter(player => {
            return player._id === this.props.message[0].sender;
        })

        return senderPlayer[0];
    }

    render() {

        //Getting the message:
        //For some reason React would not let me pass an object, so I pass the object in an array and I need to access it now
        const message = this.props.message[0];

        //Getting the date:
        const date = new Date(message.createdAt).toLocaleTimeString().trim();

        //Get whether you are the send or not
        const player = this.props.player;
        const isSender = player._id === message.sender;

        //Whether this is a competition treatment
        const isCompetition = this.props.game.treatment.competition === "comp";

        //Get whether the sender is a competitor
        const isSenderCompeting = isCompetition && (this.getSenderPlayer().get("type") === "A" || this.getSenderPlayer().get("type") === "B");

        //Get whether current player is a competitor
        const isPlayerCompeting = isCompetition && (player.get("type") === "A" || player.get("type") === "B");

        //Should mention competition?
        const isCompetitionMessage = isSenderCompeting && isPlayerCompeting && !isSender;

        return (
            <div style={messageContainer} className={isSender ? "sender-message" : "receiver-message"}>
                <div style={headContainer}>
                    <div style={playerInfoHolder}>
                        <img src={this.getSenderPlayer().get("avatar")} style={miniAvatar} />
                        <div style={initialsStyle}>{this.getSenderPlayer().get("initials")}</div>
                    </div>
                    <div style={dateStyle}>{date}</div>
                </div>
                <p style={messageStyle}>
                    {message.text}
                </p>
            </div >
        )
    }
}

//Style variables
const messageContainer = {
    padding: "10px 15px",
    marginBottom: "15px",
    borderRadius: "5px",
};

const headContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0px",
    borderBottom: "0.1px solid #9aa8b6"
};

const miniAvatar = {
    width: "2rem",
    height: "2rem",
    margin: "1rem 0"
};

const playerInfoHolder = {
    display: "flex",
    alignItems: "center",
    margin: "0px",
}

const initialsStyle = {
    fontSize: "14pt",
    fontWeight: "bold",
    margin: "0px",
}

const dateStyle = {
    color: "grey",
    fontSize: "14pt",
    margin: "0px",
    marginLeft: "2px"
};

const messageStyle = {
    overflowWrap: "break-word",
    marginTop: "5px",
};