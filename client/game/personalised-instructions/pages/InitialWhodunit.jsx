import React, { Component } from 'react';
import Whodunit from '../../../general/whodunit/Whodunit';
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'

export default class InitialWhodunit extends Component {
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min } = this.props;

        return (
            <div>
                <h3>Initial Verdict</h3>

                <p>Given the information above, Mr. Lee has asked you to provide your initial verdict as to which of the people described above you think was responsible for the collision and caused the death of his daughter?</p>

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
