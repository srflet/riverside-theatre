import React from "react";

export default class PlayerProfile extends React.Component {

  render() {
    const { player, stage } = this.props;

    return (
      <div style={informationContainer}>
        <span><strong>Your Profile</strong></span>
        <div style={playerInformation}>
          <img src={player.get("avatar")} className="avatar-medium" />
          {player.get("initials")}
        </div>

      </div>
    );
  }
}

//Style variables
const mediumImage = {
  width: "2.5rem",
  height: "2.5rem",
  margin: "1rem 0"
};

const informationContainer = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center"
}

const playerInformation = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
};