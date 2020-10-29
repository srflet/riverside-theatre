import React, { Component } from 'react';
import WhodunitQuestion from '../whodunit/WhodunitQuestion';

export default class FinalWhodunit extends Component {
    state = {
        name: "FinalWhodunit",
        whodunit: ""
    }

    handleWhodunitChange = e => {
        this.setState({ whodunit: e.currentTarget.value });
    }

    handleWhodunitSubmit = e => {
        e.preventDefault();

        if (this.state.whodunit === "") {
            alert("You need to select an answer");
        } else {
            this.props.player.set(this.state.name, this.state.whodunit);
        }
    }

    render() {
        const { player, currentPage, previousPage, nextPage } = this.props;

        const answers = player.get(this.state.name);

        return (
            <div>
                {/*If the player has already given their answer, show thank you message. Othwerwise, show the whodunnit quiz */}
                {answers !== ""
                    ? <div><p>Thank you for providing your final verdict: {answers}. </p></div>
                    : <div>
                        <p>Please indicate your final verdict as to who you think was responsible for the collision and caused the death of Mr. Lee’s daughter:</p>
                        <WhodunitQuestion player={player} handleChange={this.handleWhodunitChange} />
                        <div className="button-holder">
                            <button onClick={this.handleWhodunitSubmit} disabled={answers !== ""}>Give my answer</button>
                        </div>
                        <br />
                        <div className="game-instructions">
                            You need to provide your answer before you can go on to the next page. Careful, once you have provided your answer you cannot change it!
                        </div>
                    </div>
                }

                <p className="button-holder">
                    <button type="button" onClick={previousPage} disabled={currentPage === 0}>
                        Previous
                    </button>
                    &emsp;
                    <button type="button" onClick={nextPage} disabled={answers === ""}>
                        Next
                    </button>
                </p>
            </div>
        )
    }
}
