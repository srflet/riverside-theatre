import React, { Component } from 'react';
import { TimeSync } from "meteor/mizzao:timesync";
import { returnPlayerInitials, returnPlayerAvatar } from '../../../general/helper-functions/returnPlayerInformation'

import Message from './Message';

import Competitor from '../../../general/tips-n-messages/Competitor';

export default class Chat extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            nbOfMessages: 0,
            newMessages: false,
            justSentMessage: false,
        };

        this.heightRef = React.createRef();
    }

    notificationSound = new Audio("sounds/notification.mp3")

    scrollToBottom = () => {
        this.heightRef.current.scrollTop = this.heightRef.current.scrollHeight;
        this.setState({ nbOfMessages: this.getNbMessage() });
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        const { nbOfMessages, justSentMessage } = this.state;

        if (nbOfMessages !== this.getNbMessage()) {

            if (!justSentMessage) {
                this.setState({ newMessages: true });

                if (this.getIsInvolved()) {
                    this.notificationSound.play();
                }

            }
            this.setState({ justSentMessage: false });

            this.scrollToBottom();
        }
    }

    getNbMessage = () => {
        const { round, communicationPattern } = this.props

        return round.get("messages").filter(message => {
            return message.chat === communicationPattern;
        }).length;
    };

    sawMessages = () => {
        this.setState({ newMessages: false });
    }

    getIsInvolved = () => {
        const { player, communicationPattern } = this.props;

        const myType = player.get("type")
        const communicators = communicationPattern.split("c")

        return communicators.includes(myType)
    }

    changeText = (e) => {
        this.setState({ text: e.currentTarget.value });
    };

    getNewMessageID = () => {
        //Get highest message id
        let highestId = 0;
        this.props.round.get("messages").forEach((message) => {
            //If the message id is higher than the highestId...
            if (message.id > highestId) {
                //... set this message id as the new highestId
                highestId = message.id;
            }
        })

        //Increment it to make the new id
        highestId++

        return highestId;
    }

    submitMessage = (e) => {
        //Prevent default
        e.preventDefault();

        const { player, communicationPattern, round } = this.props

        let newMessage = {
            text: this.state.text,
            sender: player._id,
            senderType: player.get("type"),
            chat: communicationPattern,
            createdAt: new Date(TimeSync.serverTime(null, 1000)),
            id: this.getNewMessageID()
        };

        let currentMessages = round.get("messages");
        let newMessages = [...currentMessages, newMessage];
        round.set("messages", newMessages);

        this.setState({ text: "" });
        this.setState({ justSentMessage: true });

    }

    render() {
        const { round, game, player, communicationPattern } = this.props;

        const myType = player.get("type")
        const communicators = communicationPattern.split("c")
        const isInvolved = this.getIsInvolved()
        const otherType = communicators.filter(communicator => { return communicator !== myType })[0]

        const competitors = JSON.parse(game.treatment.competition)
            .filter(competitionPattern => { return competitionPattern.replace("v", "c") === communicationPattern })

        return (
            <div style={isInvolved ? { margin: "2.5px", width: "495px" } : { display: "none" }}>

                <div style={chatHeaderHolder}>
                    <span style={chatHeaderInfo}>
                        {`Chat with ${returnPlayerInitials(game, otherType)} `}
                        <img src={returnPlayerAvatar(game, otherType)} className="avatar-small" />
                        {competitors.length !== 0 && <Competitor />}
                    </span>

                    {this.state.newMessages && <span className="header-notification">New Messages!</span>}
                </div>

                <div style={chatBox} ref={this.heightRef}>
                    {round.get("messages").filter(message => {
                        return message.chat === communicationPattern;
                    }).map((message) => (
                        <Message key={message.id} message={[message]} player={player} game={game} />
                    ))}
                </div>

                <div style={inputHolder}>
                    <form onSubmit={this.submitMessage}>
                        <input
                            style={messageInput}
                            type="text"
                            name="text"
                            placeholder="Type your message..."
                            onChange={this.changeText}
                            value={this.state.text}
                            autoComplete="off"
                            onClick={this.sawMessages}
                        />
                        <input type="submit" value="Send" className="messageSubmit" />
                    </form>
                </div>
            </div>
        )

    }
}


//Style variables
const chatBox = {
    padding: "30px",
    height: "400px",
    width: "100%",
    overflowY: "scroll",
    borderWidth: "1.5px",
    borderStyle: "solid",
};

const chatHeaderHolder = {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem",
    margin: "0px",
    backgroundColor: "#394B59",
    height: "80px",
    width: "100%",
}

const chatHeaderInfo = {
    display: "flex",
    alignItems: "center",
    color: "white",
};

const inputHolder = {
    width: "100%x"
};

const messageInput = {
    width: "85%",
    margin: "0px",
    height: "50px",
};

