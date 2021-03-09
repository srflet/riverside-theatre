import React, { Component } from 'react';
import PoliceClues from '../../../general/clues/PoliceClues';
import CluesTable from '../../../general/clues/CluesTable';
import Whodunit from '../../../general/whodunit/Whodunit';
import ChangePageButtons from '../../../general/buttons/ChangePageButtons';

export default class FinalWhodunit extends Component {
    state = {
        name: "finalWhodunit",
    }

    render() {
        const { player, pageDbIndex, min } = this.props;
        const answers = player.get(this.state.name) ?? "";

        return (
            <div>
                <h3 style={{ marginTop: "0" }}>Final Verdict</h3>
                <p>Below is all the information you have, including the police clues and all the unique clues you have collected.</p>

                <h4> Information </h4>
                <PoliceClues />
                <br />
                <CluesTable {...this.props} />

                <h4> Giving my final verdict </h4>
                <Whodunit player={player} whichVerdict={"final"} />

                {answers === "" &&
                    <div className="game-instructions">
                        You to provide your final verdict as to who caused the collision. Careful, once you have given your verdict, you cannot change it!
                    </div>
                }

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} disabledCondition={answers === ""} />
            </div>
        )
    }
}

