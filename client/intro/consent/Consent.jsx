import React from "react";
import { Centered, ConsentButton } from "meteor/empirica:core";
import { isMobile, isChrome, isSafari } from 'react-device-detect';

export default class Consent extends React.Component {
	render() {
		return !isMobile && (isChrome || isSafari) ?
			(
				<Centered>
					<div>
						<h2 style={{ textAlign: "center" }}>Welcome to the Murder Mystery Game!</h2>

						<h3>Procedures</h3>
						<p>
							The procedures will take less than 30 minutes, in which you will be asked to play as a private detective solving a case, along with two other private detectives who are also played by students in this class. You will read about a “murder mystery”, then discuss with the other two players, and indicate your final verdict.
          				</p>

						<h3>Technical Note</h3>
						<p>
							This study cannot run on mobile/tablets nor on browsers other than Chrome or Safari. Please make sure you are using a <strong>computer</strong> and that you are using <strong>Chrome or Safari</strong>.
         			 	</p>

						<br />
						<ConsentButton text="NEXT" />
					</div>
				</Centered>
			) :
			(
				<Centered>
					<div>
						<h2 style={{ textAlign: "center" }}>Welcome to the Murder Mystery Game!</h2>
						<h3>Technical Note</h3>
						<p>
							This study cannot run on mobile/tablets nor on browsers other than Chrome or Safari. Please make sure you are using a <strong>computer</strong> and that you are using <strong>Chrome or Safari</strong>.
         			 	</p>
					</div>
				</Centered>
			);
	}
}
