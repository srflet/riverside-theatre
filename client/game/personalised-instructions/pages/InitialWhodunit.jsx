import React, { Component } from 'react';
import Whodunit from '../../../general/whodunit/Whodunit';

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'

// ASK PARTICIPANTS FOR THEIR INITIAL VERDICT

export default class InitialWhodunit extends Component {
    // Scroll to the top when this component starts
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min } = this.props;

        return (
            <div>
                <h3>Initial Verdict</h3>

                <Whodunit player={player} whichVerdict={"initial"} />

                <div className="game-instructions">
                    <div>
                        <strong><u>Note:</u></strong> This is only your <strong>initial verdict.</strong> After the discussion phase you will provide your <strong>final verdict</strong> which might be different.
                    </div>
                </div>

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} disabledCondition={!player.get("initialWhodunit")} />

            </div>
        )
    }
}
