import React, { Component } from 'react'
import { Centered } from "meteor/empirica:core";
import DevWrapper from '../general/dev-wrapper/DevWrapper';
import ChangePageButtons from '../general/buttons/ChangePageButtons';


import TheatreLogo from '../general/images/TheatreLogo';

// Background for the case
export default class Background extends Component {
    render() {
        const { hasPrev, hasNext, onNext, onPrev, pageDbIndex, min, player } = this.props;

        return (
            <DevWrapper {...this.props}>
                <Centered>
                    <div className="instructions">
                        <h2>Background</h2>
                        <p>
                            During this study, we would like your team to take the role of a special project team of Riverside Theatre, a historic art institution in Chicago, Illinois. Please read the following information carefully.
                        </p>

                        <br />

                        <TheatreLogo />

                        <br />
                    
                        <p>
                            The <em>Riverside Theatre</em> has more than 40 years of experience in bringing excellent plays and shows to the interested public and professional arts community.
                        </p>
    
                        <p>
                            Today, due to the economic developments and changes in the entertainment industry, the <em>Riverside</em> is facing new challenges. 
                        </p>

                        <p>
                            The Managing Director has assembled three special project teams and put them in charge of independently coming up with an action plan that helps the theatre to improve its position.
                        </p>

                        <p>
                        He has made clear that he is <strong><u>especially interested in innovative plans and ideas. By this, he means plans which are both novel and impactful.</u></strong>
                        </p>

                        <br />

                        
                        <div className="game-instructions">
                            <span>
                                Next, we will present to you information that can be helpful to your team. Importantly, the information is from two sources:
                            </span>
                            <br />
                            <ol>
                                <li><strong>Public, shared information about the theater, which will be available to all three teams. </strong></li>
                                <li><strong>Private, team-specific information about the theatre that are UNIQUE to your team (e.g. one team will have accounting information that the other two teams are not given)</strong></li>
                            </ol>
                        </div>

                        <br />
                        
                        <p>
                            On the next page, we will first show you the public, shared information. 
                        </p>
                    </div>
                    <br />

                    <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />

                    
                </Centered>
            </DevWrapper>
        )
    }
}
