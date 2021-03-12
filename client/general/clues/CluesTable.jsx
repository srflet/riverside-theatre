import React, { Component } from 'react'
import { getPlayerClues } from '../helper-functions/getClues'
import { returnPlayerInitials, returnPlayerAvatar } from '../helper-functions/returnPlayerInformation'
import Competitor from '../tips-n-messages/Competitor'

export default class CluesTable extends Component {
    render() {
        const { player } = this.props
        const type = player.get("type")

        let positions = ["A", "B", "C"]
        positions.splice(positions.indexOf(type), 1)
        positions.unshift(type)

        return (
            <div className="tables-holder">
                {positions.map((position, index) => {
                    return <PlayerTable key={index} position={position} {...this.props} />
                })}
            </div>
        )
    }
}

class PlayerTable extends Component {

    handleChange = e => {
        const { player } = this.props

        const text = e.currentTarget.value
        const clueId = e.currentTarget.name

        let cluesAnswered = player.get("clues-answered")
        cluesAnswered[clueId] = text
        player.set("clues-answered", cluesAnswered)
    }

    render() {
        const { position, game, round, player } = this.props;

        const clues = getPlayerClues(round, game, position)
        const cluesAnswered = player.get("clues-answered")

        const type = player.get("type")
        const currentPlayer = type === position

        return (
            <div className="table-of-clues">
                <div className="clues-header">
                    {currentPlayer ? "Your clues" : <PlayerProfile position={position} type={type} {...this.props} />}
                </div>


                {clues.map((clue, index) => {
                    // Get the answer for this clue id
                    const answer = cluesAnswered[clue.id] ?? ""
                    // Calculate the number of rows based on the number of characters in the answer so that
                    // the text area will grow automatically
                    const size = answer !== "" ? Math.round((answer.length / 50) + 1) : 1
                    return (
                        <div key={index} className="clues-row">
                            <p className="justify-center">{clue.question}</p>
                            <div className="justify-center">
                                <textarea
                                    name={clue.id}
                                    width="100%"
                                    rows={size}
                                    value={answer}
                                    disabled={currentPlayer}
                                    autoComplete="off"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

class PlayerProfile extends Component {
    render() {
        const { game, type, position } = this.props
        const competition = JSON.parse(game.treatment.competition)
        const isCompetitor = competition.includes(type + "v" + position) || competition.includes(position + "v" + type)

        return (
            <>
                Unique clues from player {returnPlayerInitials(game, position)} <img className="avatar-small" src={returnPlayerAvatar(game, position)} />
                <br />
                {isCompetitor && <Competitor />}
            </>
        )
    }
}
