import React, { Component } from 'react';

export default class IntroDiscussion extends Component {
    render() {

        return (
            <div>
                <h3>Introducting the Discussion</h3>
                <p>
                    Mr. Lee has called a meeting of all three Investigators he hired. After realizing that each PI has their unique information, he informed the PIs that he is not interested in individual answers that are based on possibly incomplete information, rather he said that <strong><u>each of you NEED more information to correctly identify the suspect.</u></strong>
                </p>
                <p>
                    Now, Mr. Lee has asked the three of you to discuss your opinions and form your final verdict.
                </p>
                <div>A recap of what is know:</div>
                <ol>
                    <li>the other two PIs also have police’s notes </li>
                    <li>they also conducted their own investigation that produced some unique clues that are not available to you </li>
                    <li>
                        <strong><u>
                            the information you currently have is likely INCOMPLETE, and to identify the correct suspect, you will need some information from the other two participants.
                        </u></strong>
                    </li>
                </ol>
            </div>
        )

    }
}
