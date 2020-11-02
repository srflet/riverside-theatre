import { StageTimeWrapper } from "meteor/empirica:core";
import React, { Fragment } from "react";

class timer extends React.Component {

    handleEarlySubmission = () => {
        this.props.player.set("isEarlySubmission", true);
        this.props.player.set("earlySubmissionTime", this.props.remainingSeconds);
        this.props.player.stage.submit();
    }

    render() {
        const { remainingSeconds, player, round } = this.props;

        if (remainingSeconds > round.get("earlySubTimeNum")) {
            return (
                <div>
                    <p>You can only provide an early submission once {round.get("earlySubTimeText")} minutes are left on the timer.</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>
                        You can now provide an early submission. This means that you think you have acquired sufficient information and you do not wish to continue the discussion for the full {round.get("discussionTime")} minutes.
                    </p>

                    <br />

                    <div className="game-instructions">
                        <div>
                            You can provide your early submission by clicking on the button below. <br /> <strong>Careful! Once you provide early submission you cannot go back.</strong>
                        </div>
                    </div>

                    <br />

                    <p>
                        However, note that you will only be moved on to the next stage <strong><u>if all three player have provided early submission</u></strong>. In the meantime, you will still be able to send messages, receive messages, and check clues. Players who have provided early submission will be indicated by a tick instead of a cross next to their avatar at the top of the screen.
                    </p>

                    <p className="button-holder">
                        <button type="button" onClick={this.handleEarlySubmission} disabled={player.get("isEarlySubmission")}>
                            {player.get("isEarlySubmission") ? "You have provided early submission!" : "Provide early submission"}
                        </button>
                    </p>
                </div>
            )
        }
    }
}

export default (EarlySubmission = StageTimeWrapper(timer));