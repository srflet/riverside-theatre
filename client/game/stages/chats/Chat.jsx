import React, { Component, Fragment } from 'react';
import Message from './Message';

export default class Chat extends Component {
    state = {
        text: ""
    }

    changeText = (e) => {
        this.setState({ text: e.currentTarget.value });
    }

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
            chat: this.props.chatNb,
            createdAt: new Date().toTimeString(),
            id: this.getNewMessageID()
        };

        let currentMessages = this.props.round.get("messages");

        let newMessages = [...currentMessages, newMessage];

        this.props.round.set("messages", newMessages);

        this.setState({ text: "" });

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
            }
        }

        chatProperties.isInvolved = chatProperties.playersInvolved.includes(player.get("type"));

        if (chatProperties.isInvolved) {
            return (
                <div>
                    <p>Chat with {chatProperties.initials[chatProperties.playersInvolved[0]]}{chatProperties.initials[chatProperties.playersInvolved[1]]} </p>
                    <div style={chatBox}>
                        {round.get("messages").filter(message => {
                            return message.chat === chatNb;
                        }).map((message) => (
                            <Message key={message.id} message={[message]} player={player} game={game} />
                        ))}
                    </div>
                    <div>
                        <form onSubmit={this.submitMessage}>
                            <input
                                type="text"
                                name="text"
                                placeholder="Type your message..."
                                onChange={this.changeText}
                                value={this.state.text}
                                autoComplete="off"
                            />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <Fragment></Fragment>
            )
        }
    }
}


//Style variables
const chatBox = {
    padding: "30px",
    maxHeight: "500px",
    overflowY: "scroll",
    borderWidth: "thin",
    borderStyle: "solid",
};
