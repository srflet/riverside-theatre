import { StageTimeWrapper } from "meteor/empirica:core";
import React from "react";

class timer extends React.Component {

  //https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
  fmtMSS = s => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }

  render() {
    const { remainingSeconds } = this.props;

    const classes = ["timer"];
    if (remainingSeconds <= 5) {
      classes.push("lessThan5");
    } else if (remainingSeconds <= 10) {
      classes.push("lessThan10");
    }

    if (remainingSeconds === 120) {
      alert("ONLY TWO MINUTES LEFT!")
    }

    return (
      <div className={classes.join(" ")}>
        <p><strong>Timer</strong></p>
        <p className="seconds">{this.fmtMSS(remainingSeconds)}</p>
      </div>
    );
  }
}

export default (Timer = StageTimeWrapper(timer));