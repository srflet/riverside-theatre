import React, { Component } from 'react'
import { Centered } from "meteor/empirica:core";
import DevWrapper from '../general/dev-wrapper/DevWrapper';
import ChangePageButtons from '../general/buttons/ChangePageButtons';
import { returnOtherTeams, returnTeammateInitials, returnOthersAvatar} from '../general/helper-functions/returnPlayerInformation'


// General introduction to the game
export default class GeneralIntroduction extends Component {
    render() {
        const { hasNext, onNext, player, pageDbIndex, game, min } = this.props;
        const [otherTeam1, otherTeam2] = returnOtherTeams(game, player);
        const [team1Avatar, team2Avatar] = returnOthersAvatar(game, player);
        const myTeam = player.get('team')
        const teammateName = returnTeammateInitials(game, myTeam, player)

        return (
            <DevWrapper {...this.props}>
                <Centered>
                    <div>
                        <h2>General Instructions</h2>

                        <div className="game-instructions">
                            <p><strong>Welcome to our study!</strong></p>

                            <p>
                            In this exercise, you have been connected with another participant, <strong>{teammateName}</strong>, to work as a special project team to come up with an innovative business plans to save the historic Riverside Theatre in Chicago, Illinois.
                            </p>
                            <p>
                            Using this online platform, we have assigned you as Team {myTeam} <img src={player.get("avatar")} className="avatar-medium-textaligned" />  and connected you with two other teams who are also tasked with saving the theater, Team {otherTeam1} <img src={team1Avatar} className="avatar-medium-textaligned" />  and Team {otherTeam2} <img src={team2Avatar} className="avatar-medium-textaligned" /> . 
                            </p>   
                        
                        </div>

                        <br />                           
                                
                        <p>
                            <strong><u>Crucially, each team has their unique information and data on the theater.</u></strong> After the initial instructions, your team can choose to chat with the other two teams and exchange information to help create your team’s proposal.
                        </p>
                        
                        <p>
                            Please spend the next <strong>15 minutes</strong> to read through the information about the Riverside Theatre and meet your teammate.
                        </p>

                        <p>If you are ready to proceed, please click next. </p>

                    </div>

                    {/* Empirica introduction buttons */}
                    <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
                </Centered>
            </DevWrapper>
        )
    }
}
