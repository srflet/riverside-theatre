import React, { Component, Fragment } from 'react';
import { getClues } from '../../../general/helper-functions/getClues';
import { returnPlayerInitials } from '../../../general/helper-functions/returnPlayerInitials';
import { returnPlayerAvatar } from '../../../general/helper-functions/returnPlayerAvatar';

export default class CluesCheck extends Component {

    handleChange = e => {
        let text = e.currentTarget;
        let cluesChecked = this.props.player.get("cluesChecked");
        cluesChecked[text.name] = text.value;
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
                                {player.get("type") === "A"
                                    ? cluesA.map(clue => {
                                        return <tr key={clue.id}>
                                            <td className="clueCheck-clue">{clue.text}</td>
                                        </tr>
                                    })
                                    : <Fragment>
                                        <tr>
                                            <td className="clueCheck-clue">
                                                The guilty person was
                                                <input
                                                    type="text"
                                                    name="0"
                                                    value={cluesChecked["0"]}
                                                    onChange={e => this.handleChange(e)}
                                                    autoComplete="off"
                                                    style={{ width: "80px", margin: "0 5px" }}
                                                />
                                                 (operating a specific type of vehicle).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="clueCheck-clue">
                                                During police inspection, the guilty person was discovered to have
                                                <input
                                                    type="text"
                                                    name="1"
                                                    value={cluesChecked["1"]}
                                                    onChange={e => this.handleChange(e)}
                                                    autoComplete="off"
                                                    style={{ width: "80px", margin: "0 5px" }}
                                                />
                                               mg of alcohol per 100ml of blood (80mg of alcohol per 100ml of blood is the legal limit).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="clueCheck-clue">
                                                The guilty person admitted that he or she was NOT
                                                <input
                                                    type="text"
                                                    name="2"
                                                    value={cluesChecked["2"]}
                                                    onChange={e => this.handleChange(e)}
                                                    autoComplete="off"
                                                    style={{ width: "80px", margin: "0 5px" }}
                                                />
                                                 (info relevant to why the collision occurred) at the time of the collision.
                                            </td>
                                        </tr>
                                    </Fragment>
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="clueCheck-table-holder" style={{ borderRight: "none" }}>
                        <table>
                            <tbody>
                                {player.get("type") === "B"
                                    ? cluesB.map(clue => {
                                        return <tr key={clue.id}>
                                            <td className="clueCheck-clue">{clue.text}</td>
                                        </tr>
                                    })
                                    : <Fragment>
                                        <tr>
                                            <td className="clueCheck-clue">
                                                The guilty person is less than
                                                <input
                                                    type="text"
                                                    name="3"
                                                    value={cluesChecked["3"]}
                                                    onChange={e => this.handleChange(e)}
                                                    autoComplete="off"
                                                    style={{ width: "80px", margin: "0 5px" }}
                                                />
                                                 years old (age of the guilty person).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="clueCheck-clue">
                                                Due to
                                                <input
                                                    type="text"
                                                    name="4"
                                                    value={cluesChecked["4"]}
                                                    onChange={e => this.handleChange(e)}
                                                    autoComplete="off"
                                                    style={{ width: "80px", margin: "0 5px" }}
                                                />
                                                 (a personal reason as to why the collision occurred), the guilty person wasn’t able to avoid the collision.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="clueCheck-clue">
                                                The guilty person claims that approaching the intersection, he/she did not
                                                <input
                                                    type="text"
                                                    name="5"
                                                    value={cluesChecked["5"]}
                                                    onChange={e => this.handleChange(e)}
                                                    autoComplete="off"
                                                    style={{ width: "80px", margin: "0 5px" }}
                                                />
                                                 (reason related to why the collision occurred).
                                            </td>
                                        </tr>
                                    </Fragment>
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="clueCheck-table-holder">
                        <table>
                            <tbody>
                                {player.get("type") === "C"
                                    ? cluesC.map(clue => {
                                        return <tr key={clue.id}>
                                            <td className="clueCheck-clue">{clue.text}</td>
                                        </tr>
                                    })
                                    : <Fragment>
                                        <tr>
                                            <td className="clueCheck-clue">
                                                The guilty person is a
                                                <input
                                                    type="text"
                                                    name="6"
                                                    value={cluesChecked["6"]}
                                                    onChange={e => this.handleChange(e)}
                                                    autoComplete="off"
                                                    style={{ width: "80px", margin: "0 5px" }}
                                                />
                                                 (gender of the guilty person).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="clueCheck-clue">
                                                His or her
                                                <input
                                                    type="text"
                                                    name="7"
                                                    value={cluesChecked["7"]}
                                                    onChange={e => this.handleChange(e)}
                                                    autoComplete="off"
                                                    style={{ width: "80px", margin: "0 5px" }}
                                                />
                                                (a family member) is indirectly responsible for the accident.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="clueCheck-clue">
                                                The guilty person’s vehicle was travelling at the speed of
                                                <input
                                                    type="text"
                                                    name="8"
                                                    value={cluesChecked["8"]}
                                                    onChange={e => this.handleChange(e)}
                                                    autoComplete="off"
                                                    style={{ width: "80px", margin: "0 5px" }}
                                                />
                                                mph.
                                            </td>
                                        </tr>
                                    </Fragment>
                                }
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