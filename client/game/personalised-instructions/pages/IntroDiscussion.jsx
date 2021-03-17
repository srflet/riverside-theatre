import React, { Component } from 'react';
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'
import ComStructShape from '../../../general/communication-structure/ComStructShape'

export default class IntroDiscussion extends Component {
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min, game } = this.props;

        const communication = JSON.parse(game.treatment.communication)
        const isAll = communication.length === 3
        const type = player.get("type")
        const nbChats = communication.filter(communicationPattern => {
            return communicationPattern.split("c").includes(type)
        }).length

        return (
            <div>
                <h3>Introducing the Discussion</h3>
                <p>
                    The firm has reported your verdict to Mr. Lee and he mentioned to you that <strong><u>the other two players, while they have the police clues, also have unique clues you don’t have.</u></strong> This made Mr. Lee realize that, in order to solve the case, it might be necessary for the three players to discuss the case together.
                </p>

                <p>Mr. Lee and the three firms have arranged a meeting so that the three players can discuss the case in the next phase of the game</p>
                <p>
                    The diagram below illustrates the communication structure among the three players, where a black line indicates that two players will be able to chat with each other in the discussion phase.
                    <strong>
                        {" "}As you can see, {isAll ? "everyone will be able to chat with every other player" : "Not everyone will be able to chat with every other player"}.
                        You will be able to chat with {nbChats} other players; hence, you will see {nbChats} chat boxes during the discussion phase.
                    </strong>
                </p>

                <div className="justify-center">
                    <ComStructShape showCompetition={false} {...this.props} />
                </div>

                <br />

                <div className="game-tip">
                    <strong><u>Game tip:</u></strong> The clues you currently have are likely insufficient to identify the guilty person. To have the best shot at successfully solving the game, you will need to get as many clues from the other two players as possible.
                </div>

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
            </div>
        )

    }
}
