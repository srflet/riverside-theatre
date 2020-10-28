import { StageTimeWrapper } from "meteor/empirica:core";
import React, { Fragment } from "react";

class timer extends React.Component {

    handleEarlySubmission = () => {
        this.props.player.set("isEarlySubmission", false);
        this.props.player.set("earlySubmissionTime", 0);
        this.props.player.stage.submit();
    }

    render() {
        const { remainingSeconds, player, round } = this.props;

        if (remainingSeconds > round.get("earlySubTimeNum")) {
            return (
                <div>
                    <p>You can only provide an early submission after {round.get("earlySubTimeText")} minutes have passed.</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>
                        You can now provide an early submission. This means that you think you have acquired sufficient information and you do not wish to continue the discussion for the full {round.get("discussionTime")} minutes.
                    </p>
                    <p>
                        You can provide your early submission by clicking on the button below. <strong>Careful! Once you provide early submission you cannot go back.</strong>
                    </p>
                    <p>
                        However, note that you will only be moved on to the next stage if every player has provided early submission. If they still desire to do the full {round.get("discussionTime")} minutes of discussion then you will have to wait. Players who have provided early submission will be indicated by a tick instead of a cross next to their avatar at the top of the screen. <strong>In the meantime, you can continue discussing.</strong>
                    </p>
                    <p className="button-holder">
                        <button type="button" onClick={this.handleEarlySubmission}>
                            Early Submission
                        </button>
                    </p>
                </div>
            )
        }
    }
}

export default (EarlySubmission = StageTimeWrapper(timer));