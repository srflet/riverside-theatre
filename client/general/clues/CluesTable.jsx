import React, { Component } from 'react'
import { getPlayerClues } from '../helper-functions/getClues'
import { returnPlayerInitials, returnPlayerAvatar } from '../helper-functions/returnPlayerInformation'
import TextareaAutosize from 'react-textarea-autosize'

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
                        const answer = cluesAnswered[clue.id] ?? ""
                        const size = answer !== "" ? answer.length : 1
                        return (
                            <tr key={index}>
                                <td>
                                    <span>{clue.text1}</span>
                                    {/* 
                                                                        <input
                                        type="text"
                                        name={clue.id}
                                        size={size}
                                        value={answer}
                                        disabled={type === position}
                                        autoComplete="off"
                                        onChange={this.handleChange}
                                    />
                                    */}
                                    <TextareaAutosize />

                                    <span>{clue.text2}</span>
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
                Unique clues from player {returnPlayerInitials(game, position)} <img style={miniAvatar} src={returnPlayerAvatar(game, position)} />
            </>
        )
    }
}

//Style variable:
const miniAvatar = {
    width: "2rem",
    height: "2rem",
    margin: "0px",
};
