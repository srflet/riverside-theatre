import React, { Component } from 'react';
import Message from './Message';
import { TimeSync } from "meteor/mizzao:timesync";
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

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        if (this.state.nbOfMessages !== this.getNbMessage()) {

            if (!this.state.justSentMessage) {
                this.setState({ newMessages: true });

                if (this.getIsInvolved()) {
                    this.notificationSound.play();
                }

            }
            this.setState({ justSentMessage: false });

            this.scrollToBottom();
        }
    }

    scrollToBottom = () => {
        this.heightRef.current.scrollTop = this.heightRef.current.scrollHeight;
        this.setState({ nbOfMessages: this.getNbMessage() });
    };

    getNbMessage = () => {
        return this.props.round.get("messages").filter(message => {
            return message.chat === this.props.chatNb;
        }).length;
    };

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

        let newMessage = {
            text: this.state.text,
            sender: this.props.player._id,
            senderType: this.props.player.get("type"),
            chat: this.props.chatNb,
            createdAt: new Date(TimeSync.serverTime(null, 1000)),
            id: this.getNewMessageID()
        };

        let currentMessages = this.props.round.get("messages");

        let newMessages = [...currentMessages, newMessage];

        this.props.round.set("messages", newMessages);

        this.setState({ text: "" });

        this.setState({ justSentMessage: true });

    }

    sawMessages = () => {
        this.setState({ newMessages: false });
    }

    getIsInvolved = () => {

        let chatNb = this.props.chatNb;
        let players;
        if (chatNb === 1) {
            players = ["A", "B"];
        } else if (chatNb === 2) {
            players = ["A", "C"];
        } else {
            //if chatNb === 3
            players = ["B", "C"];
        }

        return players.includes(this.props.player.get("type"));
    }

    render() {
        const { round, game, player, chatNb } = this.props;

        const returnPlayerInitials = (type) => {
            let initials = game.players.filter(player => {
                return player.get("type") === type
            }).map(player => {
                return player.get("initials")
            })

            return initials;
        }

        const returnPlayerAvatar = (type) => {
            let avatar = game.players.filter(player => {
                return player.get("type") === type
            }).map(player => {
                return player.get("avatar")
            })

            return avatar;
        }

        const determinePlayersInvolved = (chatNb) => {
            let players;
            if (chatNb === 1) {
                players = ["A", "B"];
            } else if (chatNb === 2) {
                players = ["A", "C"];
            } else {
                //if chatNb === 3
                players = ["B", "C"];
            }

            return players;
        }

        const chatProperties = {
            playersInvolved: determinePlayersInvolved(chatNb),
            initials: {
                A: player.get("type") === "A" ? "" : returnPlayerInitials("A"),
                B: player.get("type") === "B" ? "" : returnPlayerInitials("B"),
                C: player.get("type") === "C" ? "" : returnPlayerInitials("C")
            },
            avatars: {
                A: player.get("type") === "A" ? "" : returnPlayerAvatar("A"),
                B: player.get("type") === "B" ? "" : returnPlayerAvatar("B"),
                C: player.get("type") === "C" ? "" : returnPlayerAvatar("C")
            }
        }

        chatProperties.isInvolved = chatProperties.playersInvolved.includes(player.get("type"));

        let avatarPath = "";
        if (chatProperties.avatars[chatProperties.playersInvolved[0]] !== "") {
            avatarPath = chatProperties.avatars[chatProperties.playersInvolved[0]];
        } else {
            avatarPath = chatProperties.avatars[chatProperties.playersInvolved[1]];
        }

        return (
            <div style={chatProperties.isInvolved ? { margin: "2.5px", width: "495px" } : { display: "none" }}>
                <p style={chatHeaderHolder}>
                    <span style={chatHeaderInfo}>
                        Chat with
                        {" " +
                            chatProperties.initials[chatProperties.playersInvolved[0]]}{chatProperties.initials[chatProperties.playersInvolved[1]]
                                + " "
                        }
                        <img src={avatarPath} className="avatar-small" />
                        &emsp;
                        {
                            <Competitor />
                        }
                    </span>

                    {
                        this.state.newMessages
                            ? <span className="header-notification">New Messages!</span>
                            : ""
                    }
                </p>
                <div style={chatBox} ref={this.heightRef}>
                    {round.get("messages").filter(message => {
                        return message.chat === chatNb;
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

const miniAvatar = {
    width: "2rem",
    height: "2rem",
    margin: "0px"
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

