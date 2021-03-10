import React, { Component } from 'react'
import { getPlayerClues } from '../helper-functions/getClues'
import { returnPlayerInitials, returnPlayerAvatar } from '../helper-functions/returnPlayerInformation'
import Competitor from '../tips-n-messages/Competitor'

export default class CluesTable extends Component {
    render() {
        return (
            <div className="tables-holder">
                <PlayerTable position={"A"} {...this.props} />
                <PlayerTable position={"B"} {...this.props} />
                <PlayerTable position={"C"} {...this.props} />
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
            <table className="table-of-clues">
                <thead>
                    <tr>
                        <th>
                            {currentPlayer ? "Your clues" : <PlayerProfile position={position} {...this.props} />}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {clues.map((clue, index) => {
                        // Get the answer for this clue id
                        const answer = cluesAnswered[clue.id] ?? ""
                        // Calculate the number of rows based on the number of characters in the answer so that
                        // the text area will grow automatically
                        const size = answer !== "" ? Math.round((answer.length / 30) + 1) : 1
                        return (
                            <tr key={index}>
                                <td>
                                    <p>{clue.text1}</p>
                                    <textarea
                                        name={clue.id}
                                        width="100%"
                                        rows={size}
                                        value={answer}
                                        disabled={type === position}
                                        autoComplete="off"
                                        onChange={this.handleChange}
                                    />
                                    <p>{clue.text2}</p>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

class PlayerProfile extends Component {
    render() {
        const { game, position } = this.props

        return (
            <>
                Unique clues from player {returnPlayerInitials(game, position)} <img className="avatar-small" src={returnPlayerAvatar(game, position)} />
                <br />
                <Competitor />
            </>
        )
    }
}