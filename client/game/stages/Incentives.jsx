import React, { Component, Fragment } from 'react';
import NextStageButton from '../general-ui/NextStageButton';

export default class Incentives extends Component {
    render() {
        //Getting whether this is a condition with competition
        const { competitionCondition, player, stage, game } = this.props;

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

        //Only return this element if it is the appropriate stage
        if (stage.name == "incentives") {
            //Render according to the competition condition:
            if (competitionCondition === "comp") {
                //If there is competition...
                //...render page according to player:
                if (player.get("type") === "A") {
                    return (
                        <div>
                            <h2>Incentives</h2>
                            <p style={incentiveRevealFormat}>
                                You are competing against {returnPlayerInitials("B") + " "}
                                <img src={returnPlayerAvatar("B")} style={miniAvatar} />
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet molestie ante ut placerat. Curabitur nec velit arcu. Proin sagittis porta ligula sit amet feugiat. Nunc molestie pharetra orci, a tristique tortor. Sed sodales risus at sapien ultricies scelerisque. Fusce id ornare diam, eu efficitur ipsum. Vivamus eleifend maximus lectus eget semper. Aenean vel velit non mauris rutrum suscipit a sollicitudin metus. Fusce pharetra ac purus ac interdum. In posuere mattis ultrices. Mauris sed laoreet ipsum.
                             </p>
                            <NextStageButton player={player} game={game} />
                        </div>

                    )
                } else if (player.get("type") === "B") {
                    return (
                        <div>
                            <h2>Incentives</h2>
                            <p style={incentiveRevealFormat}>
                                You are competing against {returnPlayerInitials("A") + " "}
                                <img src={returnPlayerAvatar("A")} style={miniAvatar} />
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet molestie ante ut placerat. Curabitur nec velit arcu. Proin sagittis porta ligula sit amet feugiat. Nunc molestie pharetra orci, a tristique tortor. Sed sodales risus at sapien ultricies scelerisque. Fusce id ornare diam, eu efficitur ipsum. Vivamus eleifend maximus lectus eget semper. Aenean vel velit non mauris rutrum suscipit a sollicitudin metus. Fusce pharetra ac purus ac interdum. In posuere mattis ultrices. Mauris sed laoreet ipsum.
                             </p>
                            <NextStageButton player={player} game={game} />
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <h2>Incentives</h2>
                            <p>
                                You are not competing.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet molestie ante ut placerat. Curabitur nec velit arcu. Proin sagittis porta ligula sit amet feugiat. Nunc molestie pharetra orci, a tristique tortor. Sed sodales risus at sapien ultricies scelerisque. Fusce id ornare diam, eu efficitur ipsum. Vivamus eleifend maximus lectus eget semper. Aenean vel velit non mauris rutrum suscipit a sollicitudin metus. Fusce pharetra ac purus ac interdum. In posuere mattis ultrices. Mauris sed laoreet ipsum.
                             </p>
                            <NextStageButton player={player} game={game} />
                        </div>
                    )
                }

            } else {
                //If there isn't competition...
                //...render the same page for all:
                return (
                    <div>
                        <h2>Incentives</h2>
                        <p>
                            You are cooperating with the other players.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet molestie ante ut placerat. Curabitur nec velit arcu. Proin sagittis porta ligula sit amet feugiat. Nunc molestie pharetra orci, a tristique tortor. Sed sodales risus at sapien ultricies scelerisque. Fusce id ornare diam, eu efficitur ipsum. Vivamus eleifend maximus lectus eget semper. Aenean vel velit non mauris rutrum suscipit a sollicitudin metus. Fusce pharetra ac purus ac interdum. In posuere mattis ultrices. Mauris sed laoreet ipsum.
                        </p>
                        <NextStageButton player={player} game={game} />
                    </div>
                )
            }
        } else {
            return (<Fragment></Fragment>)
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
