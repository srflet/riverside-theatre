import React, { Component } from 'react'
import ComStructShape from '../../../general/communication-structure/ComStructShape'

// Functions to get information from the other players
import {
    returnOthersInitials, returnOthersAvatar,
    competitionWithOthers, areOthersCompeting
} from '../../../general/helper-functions/returnPlayerInformation'

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'
import CompetitionIncentive from '../../../general/tips-n-messages/CompetitionIncentive';

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
        const othersCompeting = areOthersCompeting(game, player)
        const [player1Initials, player2Initials] = returnOthersInitials(game, player)
        const [player1Avatar, player2Avatar] = returnOthersAvatar(game, player)

        // If there is no competition
        const isNoCompetition = !conditionForCompWithPlayer1 && !conditionForCompWithPlayer2

        return isNoCompetition
            ? (
                <div className="com-n-comp">
                    <h3>Incentives</h3 >
                    <p>
                        Now, you should know that your firm is a relatively new firm that is working hard to establish a good reputation in the business.
                    </p>
                    <p>
                        Your boss has informed you that if you do well on this high-profile case with Mr. Lee, it will be a big boost to the firm’s reputation.
                    </p>
                    <p>
                        In order to correctly identify the guilty person, <strong><u>you need to collect as many clues from others as possible</u></strong> in the upcoming discussion with the other players.
                    </p>
                    <p>
                        Only by maximizing the number of unique clues you collect from others, you will have the best chance of solving this game.
                    </p>
                    <div className="game-instructions">
                        <div>
                            <p>
                                <strong>For every unique clue you collect from others, you will be awarded 2 points.</strong> For instance, if you collect a total of 3 unique clues from the other two players, you will be awarded 6 points. Keep in mind there are 6 total clues you can collect; therefore, you can get a maximum of 12 points.
                            </p>
                            <p style={{ marginBottom: "0px" }}>
                                In addition, if you correctly identify the guilty person, you will earn 5 points.
                            </p>
                        </div>
                    </div>

                    <br />

                    <CompetitionIncentive {...this.props} />

                    <br />
                    <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
                </div>
            )
            : (
                <div className="com-n-comp">
                    <h3>Incentives</h3 >
                    <p>
                        Now you should know that your firm is currently competing with Player {player1Initials} <img src={player1Avatar} className="avatar-medium-textaligned" />'s firm on another large contract in Chicago{conditionForCompWithPlayer2 && <> and competing with Player {player2Initials} <img src={player2Avatar} className="avatar-medium-textaligned" />'s firm on another large contract in Boston</>}.
                    </p>
                    <p>
                        Your boss has informed you that if you outperform Player {player1Initials} <img src={player1Avatar} className="avatar-medium-textaligned" /> {conditionForCompWithPlayer2 && <>and Player {player2Initials} <img src={player2Avatar} className="avatar-medium-textaligned" /></>} in this game, your firm has a high chance of winning {conditionForCompWithPlayer2 ? "those contracts" : "this contract"}.
                    </p>
                    <p>
                        Your boss has told you that in the following discussion between the three players, <strong> you need to outperform Player {player1Initials} <img src={player1Avatar} className="avatar-medium-textaligned" />{conditionForCompWithPlayer2 && <> and Player {player2Initials} <img src={player2Avatar} className="avatar-medium-textaligned" /></>} by collecting more clues than them.</strong>
                    </p>
                    {
                        othersCompeting
                            ? <p> Be aware that Player {player1Initials} <img src={player1Avatar} className="avatar-medium-textaligned" />'s firm and Player {player2Initials} <img src={player2Avatar} className="avatar-medium-textaligned" />'s firm are also competing with each other on a large contract in Washington D.C., hence they also have competitive incentives to outperform each other.</p>
                            : <p> Be aware that Player {player1Initials} <img src={player1Avatar} className="avatar-medium-textaligned" />'s firm and Player {player2Initials} <img src={player2Avatar} className="avatar-medium-textaligned" />'s firm are not competing against each other on any contracts in the country.</p>
                    }
                    <p>
                        Below is a graphic representation of the competitive relationship between you and the other two players:
                    </p>
                    <div className="justify-center">
                        <ComStructShape showCompetition={true} {...this.props} />
                    </div>
                    <br />
                    <div className="game-instructions">
                        <div>
                            <p>
                                To reflect this competition, at the end of the game, <strong>for every clue that you collect more than  Player  {player1Initials} <img src={player1Avatar} className="avatar-medium-textaligned" />{conditionForCompWithPlayer2 && <> and Player {player2Initials} <img src={player2Avatar} className="avatar-medium-textaligned" /></>}, you will be awarded 3 points.</strong> For instance, if you collect 3 more pieces of information than Player {player1Initials} <img src={player1Avatar} className="avatar-medium-textaligned" />, you will be awarded 9 points{conditionForCompWithPlayer2 && <>; and if you collect 2 more pieces of information than Player {player2Initials} <img src={player2Avatar} className="avatar-medium-textaligned" />, you will be awarded 6 points</>}. In this hypothetical outcome, you will have a total of {conditionForCompWithPlayer2 ? "15" : "9"} points.
                        </p>
                            <p>
                                In addition, if you correctly identify the guilty person, you will be awarded 5 points.
                        </p>
                            <p style={{ marginBottom: "0px" }}>
                                <strong>At the end of the study, if your final score places top 25 in the game, you will receive a $10 Amazon Gift Card. If you score top 10 in the game, you will receive a $20 Amazon Gift Card.</strong>
                            </p>
                        </div>
                    </div>
                    <br />

                    <CompetitionIncentive {...this.props} />

                    <br />
                    <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
                </div >
            )
    }
}
