import React, { Component } from 'react'
import ComStructShape from '../../../general/communication-structure/ComStructShape'

// Functions to get information from the other players
import { returnOthersInitials, returnOthersAvatar, competitionWithOthers } from '../../../general/helper-functions/returnPlayerInformation'

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'

// EXPLAIN THE COMPETITION RULES TO THE PLAYERS

export default class ComNComp extends Component {
    // Scroll to the top when this component starts
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min, game } = this.props;

        // Get whether this player is competitin with player 1 (A or B) and player 2 (B or C), as well as their initials and avatars
        const [conditionForCompWithPlayer1, conditionForCompWithPlayer2] = competitionWithOthers(game, player)
        const [player1Initials, player2Initials] = returnOthersInitials(game, player)
        const [player1Avatar, player2Avatar] = returnOthersAvatar(game, player)

        return (
            <div className="com-n-comp">
                <h3>Incentives</h3>
                <p>
                    Now you should know that your firm is currently competing with Player {player1Initials} <img src={player1Avatar} className="avatar-medium-textaligned" />’s firm on another large contract in Chicago{conditionForCompWithPlayer2 && <> and competing with Player {player2Initials} <img src={player2Avatar} className="avatar-medium-textaligned" />’s firm on another large contract in Boston</>}. Your boss has informed you that if you outperform Player {player1Initials} <img src={player1Avatar} className="avatar-medium-textaligned" /> {conditionForCompWithPlayer2 && <>and Player {player2Initials} <img src={player2Avatar} className="avatar-medium-textaligned" /></>} in this game, your firm has a high chance of winning {conditionForCompWithPlayer2 ? "those contracts" : "this contract"}.
                </p>
                <p>
                    In order to win the new contract, your boss has told you that in the following discussion between the three players, you need to OUTPERFORM Player {player1Initials} <img src={player1Avatar} className="avatar-medium-textaligned" />{conditionForCompWithPlayer2 && <> and Player {player2Initials} <img src={player2Avatar} className="avatar-medium-textaligned" /></>} BY COLLECTING MORE CLUES THAN THEM. In other words, you will need to try and get as many clues as possible from the other two players, and at the same time, ensuring that Player  {player1Initials} <img src={player1Avatar} className="avatar-medium-textaligned" />{conditionForCompWithPlayer2 && <> and Player {player2Initials} <img src={player2Avatar} className="avatar-medium-textaligned" /></>} {conditionForCompWithPlayer2 ? "do" : "does"} not collect more clues than you.
                </p>
                <p>
                    To reflect this competition, at the end of the game, for every clue that you collect more than  Player  {player1Initials} <img src={player1Avatar} className="avatar-medium-textaligned" />{conditionForCompWithPlayer2 && <> and Player {player2Initials} <img src={player2Avatar} className="avatar-medium-textaligned" /></>}, you will be awarded 3 points. For instance, if you collect 3 more pieces of information than Player {player1Initials} <img src={player1Avatar} className="avatar-medium-textaligned" />, you will be awarded 9 points{conditionForCompWithPlayer2 && <>; and if you collect 2 more pieces of information from Player {player2Initials} <img src={player2Avatar} className="avatar-medium-textaligned" />, you will be awarded 6 points</>}. In this hypothetical outcome, you will have a total of {conditionForCompWithPlayer2 ? "15" : "9"} points.
                </p>
                <p>
                    At the end of the study, if your final score places top 25 in the game, you will receive a $10 Amazon Gift Card. If you score top 10 in the game, you will receive a $20 Amazon Gift Card.
                </p>
                <p>
                    Keep in mind that Player {player1Initials} <img src={player1Avatar} className="avatar-medium-textaligned" />{conditionForCompWithPlayer2 && <> and Player {player2Initials} <img src={player2Avatar} className="avatar-medium-textaligned" /></>} {conditionForCompWithPlayer2 ? "are" : "is"} also aware of their {conditionForCompWithPlayer2 ? "firms’" : "firm’s"} competition towards you.
                </p>
                <p>
                    Below is a graphic representation of the competitive relationship between you and the other two players:
                </p>

                <div className="justify-center">
                    <ComStructShape showCompetition={true} {...this.props} />
                </div>

                <br />
                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
            </div>
        )
    }
}
