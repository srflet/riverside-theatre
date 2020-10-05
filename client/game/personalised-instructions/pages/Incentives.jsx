import React, { Component } from 'react';

export default class Incentives extends Component {
    render() {
        //Getting whether this is a condition with competition
        const { player, game } = this.props;

        const returnPlayerInitials = (type) => {
            let initials = game.players.filter(player => {
                return player.get("type") === type
            }).map(player => {
                return player.get("initials")
            })

            return initials;
        }

        const returnPlayerAvatar = (type) => {
            let avatar = game.players.filter(player => {
                return player.get("type") === type
            }).map(player => {
                return player.get("avatar")
            })

            return avatar;
        }

        //Render according to the competition condition:
        if (game.treatment.competition === "comp") {
            //If there is competition...
            //...render page according to player:
            if (player.get("type") === "A") {
                return (
                    <div>
                        <h3>Incentives</h3>
                        <p style={incentiveRevealFormat}>
                            You are competing against {returnPlayerInitials("B") + " "}
                            <img src={returnPlayerAvatar("B")} style={miniAvatar} />
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet molestie ante ut placerat. Curabitur nec velit arcu. Proin sagittis porta ligula sit amet feugiat. Nunc molestie pharetra orci, a tristique tortor. Sed sodales risus at sapien ultricies scelerisque. Fusce id ornare diam, eu efficitur ipsum. Vivamus eleifend maximus lectus eget semper. Aenean vel velit non mauris rutrum suscipit a sollicitudin metus. Fusce pharetra ac purus ac interdum. In posuere mattis ultrices. Mauris sed laoreet ipsum.
                             </p>
                    </div>

                )
            } else if (player.get("type") === "B") {
                return (
                    <div>
                        <h3>Incentives</h3>
                        <p style={incentiveRevealFormat}>
                            You are competing against {returnPlayerInitials("A") + " "}
                            <img src={returnPlayerAvatar("A")} style={miniAvatar} />
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet molestie ante ut placerat. Curabitur nec velit arcu. Proin sagittis porta ligula sit amet feugiat. Nunc molestie pharetra orci, a tristique tortor. Sed sodales risus at sapien ultricies scelerisque. Fusce id ornare diam, eu efficitur ipsum. Vivamus eleifend maximus lectus eget semper. Aenean vel velit non mauris rutrum suscipit a sollicitudin metus. Fusce pharetra ac purus ac interdum. In posuere mattis ultrices. Mauris sed laoreet ipsum.
                             </p>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h3>Incentives</h3>
                        <p>
                            You are not competing.
                            </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet molestie ante ut placerat. Curabitur nec velit arcu. Proin sagittis porta ligula sit amet feugiat. Nunc molestie pharetra orci, a tristique tortor. Sed sodales risus at sapien ultricies scelerisque. Fusce id ornare diam, eu efficitur ipsum. Vivamus eleifend maximus lectus eget semper. Aenean vel velit non mauris rutrum suscipit a sollicitudin metus. Fusce pharetra ac purus ac interdum. In posuere mattis ultrices. Mauris sed laoreet ipsum.
                             </p>
                    </div>
                )
            }

        } else {
            //If there isn't competition...
            //...render the same page for all:
            return (
                <div>
                    <h3>Incentives</h3>
                    <p>
                        You are cooperating with the other players.
                        </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet molestie ante ut placerat. Curabitur nec velit arcu. Proin sagittis porta ligula sit amet feugiat. Nunc molestie pharetra orci, a tristique tortor. Sed sodales risus at sapien ultricies scelerisque. Fusce id ornare diam, eu efficitur ipsum. Vivamus eleifend maximus lectus eget semper. Aenean vel velit non mauris rutrum suscipit a sollicitudin metus. Fusce pharetra ac purus ac interdum. In posuere mattis ultrices. Mauris sed laoreet ipsum.
                        </p>
                </div>
            )
        }
    }
}

//Style variables
const miniAvatar = {
    width: "2rem",
    height: "2rem",
    margin: "0px",
};

const incentiveRevealFormat = {
    display: "flex",
    alignItems: "flex-end",
}
