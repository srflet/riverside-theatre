import React, { Component } from 'react'

export default class NextStageButton extends Component {
    state = { isNextStage: false };

    //Method that ends the stage
    endStage = () => {
        //Update the isNextStage state
        this.setState({ isNextStage: true })
        //End this stage for this player
        this.props.player.stage.submit();
    }

    render() {

        if (this.state.isNextStage) {
            return (
                <div>
                    Thank you for ending this stage. The other players must also end this stage before you all move on to the next one.
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.endStage}>Next Stage</button>
                </div>
            )
        }

    }
}
