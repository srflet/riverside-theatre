import React, { Component } from 'react';
import { getClues } from '../../general-ui/helper-functions/getClues';

export default class CluesCheck extends Component {

    handleChange = e => {
        let checkbox = e.currentTarget;
        let cluesChecked = this.props.player.get("cluesChecked");
        cluesChecked[checkbox.name] = checkbox.checked;
        this.props.player.set("cluesChecked", cluesChecked);
    }

    render() {
        const { game, round, player } = this.props;
        const clues = getClues(game, round, player, "all");
        const cluesChecked = player.get("cluesChecked");

        return (
            <div className="clueCheck">
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">Check clues that you have discovered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clues.map(clue => {
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
