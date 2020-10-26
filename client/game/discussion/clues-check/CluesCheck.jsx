import React, { Component } from 'react';
import { getClues } from '../../general-ui/helper-functions/getClues';
import { returnPlayerInitials } from '../../general-ui/helper-functions/returnPlayerInitials';
import { returnPlayerAvatar } from '../../general-ui/helper-functions/returnPlayerAvatar';

export default class CluesCheck extends Component {

    handleChange = e => {
        let checkbox = e.currentTarget;
        let cluesChecked = this.props.player.get("cluesChecked");
        cluesChecked[checkbox.name] = checkbox.checked;
        this.props.player.set("cluesChecked", cluesChecked);
    }

    render() {
        const { game, round, player } = this.props;
        const cluesA = getClues(game, round, player, "A");
        const cluesB = getClues(game, round, player, "B");
        const cluesC = getClues(game, round, player, "C");
        const cluesChecked = player.get("cluesChecked");

        return (
            <div className="clueCheck">
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">
                                {player.get("type") === "A" ?
                                    "Your clues" :
                                    <div style={headerStyle}>{"Clues from player " + returnPlayerInitials(game, "A") + " "}<img style={miniAvatar} src={returnPlayerAvatar(game, "A")} /></div>}
                                {player.get("type") === "B" && game.treatment.competition === "comp" ? <span className="competitionStyle">(You are competiting with this player)</span> : ""}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cluesA.map(clue => {
                            return <tr key={clue.id}>
                                <td className="clueCheck-clue">{clue.text}</td>
                                <td className="clueCheck-checkbox">
                                    <input
                                        type="checkbox"
                                        name={clue.id}
                                        checked={cluesChecked[clue.id]}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">
                                {player.get("type") === "B" ?
                                    "Your clues" :
                                    <div style={headerStyle}>{"Clues from player " + returnPlayerInitials(game, "B") + " "}<img style={miniAvatar} src={returnPlayerAvatar(game, "B")} /></div>}
                                {player.get("type") === "A" && game.treatment.competition === "comp" ? <span className="competitionStyle">(You are competiting with this player)</span> : ""}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cluesB.map(clue => {
                            return <tr key={clue.id}>
                                <td className="clueCheck-clue">{clue.text}</td>
                                <td className="clueCheck-checkbox">
                                    <input
                                        type="checkbox"
                                        name={clue.id}
                                        checked={cluesChecked[clue.id]}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">
                                {player.get("type") === "C" ?
                                    "Your clues" :
                                    <div style={headerStyle}>{"Clues from player " + returnPlayerInitials(game, "C") + " "}<img style={miniAvatar} src={returnPlayerAvatar(game, "C")} /></div>}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cluesC.map(clue => {
                            return <tr key={clue.id}>
                                <td className="clueCheck-clue">{clue.text}</td>
                                <td className="clueCheck-checkbox">
                                    <input
                                        type="checkbox"
                                        name={clue.id}
                                        checked={cluesChecked[clue.id]}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}


//Style variable:
const miniAvatar = {
    width: "2rem",
    height: "2rem",
    margin: "0px",
};

const headerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center"
}