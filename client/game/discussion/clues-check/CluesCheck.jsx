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
            <div>
                <div className="clueCheck-headers">
                    <div className="clueCheck-header" style={{ borderRight: "none" }} >
                        {
                            player.get("type") === "A"
                                ? <div className="clueCheck-header-style">Your clues</div>
                                : <div className="clueCheck-header-style">
                                    {"Unique clues from player " + returnPlayerInitials(game, "A") + " "}<img style={miniAvatar} src={returnPlayerAvatar(game, "A")} />
                                </div>
                        }
                        {
                            player.get("type") === "B" && game.treatment.competition === "comp"
                                ? <span className="clueCheck-competition">Competitor</span>
                                : ""
                        }
                    </div>
                    <div className="clueCheck-header" style={{ borderRight: "none" }} >
                        {
                            player.get("type") === "B"
                                ? <div className="clueCheck-header-style">Your clues</div>
                                : <div className="clueCheck-header-style">
                                    {"Unique clues from player " + returnPlayerInitials(game, "B") + " "}<img style={miniAvatar} src={returnPlayerAvatar(game, "B")} />
                                </div>
                        }
                        {
                            player.get("type") === "A" && game.treatment.competition === "comp"
                                ? <span className="clueCheck-competition">Competitor</span>
                                : ""
                        }
                    </div>
                    <div className="clueCheck-header">
                        {
                            player.get("type") === "C"
                                ? <div className="clueCheck-header-style">Your clues</div>
                                : <div className="clueCheck-header-style">
                                    {"Unique clues from player " + returnPlayerInitials(game, "C") + " "}<img style={miniAvatar} src={returnPlayerAvatar(game, "C")} />
                                </div>
                        }
                    </div>
                </div>
                <div className="clueCheck-tables">
                    <div className="clueCheck-table-holder" style={{ borderRight: "none" }}>
                        <table>
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
                    </div>

                    <div className="clueCheck-table-holder" style={{ borderRight: "none" }}>
                        <table>
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
                    </div>

                    <div className="clueCheck-table-holder">
                        <table>
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
                </div>
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