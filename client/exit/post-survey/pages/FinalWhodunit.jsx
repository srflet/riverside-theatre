import React, { Component } from 'react';

// Ask participants to give a final verdict about who they think did it
import PoliceClues from '../../../general/clues/PoliceClues';
import CluesTable from '../../../general/clues/CluesTable';
import Whodunit from '../../../general/whodunit/Whodunit';

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons';

export default class FinalWhodunit extends Component {
    state = {
        name: "finalWhodunit",
    }

    // Scroll to the top when this component starts
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { player, pageDbIndex, min } = this.props;

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

                {!player.get("finalWhodunit") &&
                    <div className="game-instructions">
                        You to provide your final verdict as to who caused the collision. Careful, once you have given your verdict, you cannot change it!
                    </div>
                }

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} disabledCondition={!player.get("finalWhodunit")} />
            </div>
        )
    }
}

