import React from "react";

export default class Thanks extends React.Component {
  static stepName = "Thanks";
  render() {
    return (
      <div className="centered">
        <div>
          <h2>Finished!</h2>
          <p>Thank you for participating!</p>
        </div>
      </div>
    );
  }
}
