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
        chosen: ""
    }

    // Scroll to the top when this component starts
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    // Function to submit chosen categorical whodunit
    submitChosen = e => {
        const { player } = this.props
        const { chosen } = this.state
        player.set("categoricalWhodunit", chosen)
    }

    render() {
        const { player, pageDbIndex, min } = this.props
        const { chosen } = this.state
        const categoricalWhodunit = player.get("categoricalWhodunit") ?? ""

        return (
            <div>
                <h3 style={{ marginTop: "0" }}>Final Verdict</h3>
                <p>Below is all the information you have, including the police clues and all the unique clues you have collected.</p>

                <h4> Information </h4>
                <PoliceClues />
                <br />
                <CluesTable {...this.props} />

                <h4> Giving my final verdict </h4>

                <div className="game-instructions">
                    Careful, once you have given your verdict, you cannot change it!
                </div>
                <br />

                <Whodunit player={player} whichVerdict={"final"} />

                <p style={{ margin: "20px 0px" }}>
                    <strong>
                        If you had to choose one guilty person for Mr Lee, which one would you choose (i.e., who is most probable to be responsible for the collision)?
                    </strong>
                </p>
                {player.get("whodunit-order").map((person, index) => {
                    return (
                        <div key={index} className="radio-list">
                            <input
                                type="radio"
                                value={person.name}
                                checked={categoricalWhodunit === person.name || chosen === person.name}
                                onChange={e => this.setState({ chosen: e.currentTarget.value })}
                                disabled={categoricalWhodunit !== ""}
                            />
                            <span>{person.text}</span>
                            <br />
                        </div>
                    )
                })}

                {categoricalWhodunit === ""
                    ? <p className="button-holder" style={{ marginTop: "10px" }}>
                        <button disabled={chosen === ""} onClick={this.submitChosen}>Choose one guilty person</button>
                    </p>
                    : <div className="justify-center" style={{ marginTop: "10px" }}><p className="whodunit-thankyou">Thank you for choosing one most probable guilty person.</p></div>
                }


                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} disabledCondition={!player.get("finalWhodunit")} />
            </div >
        )
    }
}

