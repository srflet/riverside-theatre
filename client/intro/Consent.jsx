import React from "react";
import { Centered, ConsentButton } from "meteor/empirica:core";

export default class Consent extends React.Component {
	render() {
		return (
			<Centered>
				<div>
					<h2> Consent Form </h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet molestie ante ut placerat. Curabitur nec velit arcu. Proin sagittis porta ligula sit amet feugiat. Nunc molestie pharetra orci, a tristique tortor. Sed sodales risus at sapien ultricies scelerisque. Fusce id ornare diam, eu efficitur ipsum. Vivamus eleifend maximus lectus eget semper. Aenean vel velit non mauris rutrum suscipit a sollicitudin metus. Fusce pharetra ac purus ac interdum. In posuere mattis ultrices. Mauris sed laoreet ipsum.
         			 </p>
					<p>
						In vitae sollicitudin arcu. Etiam a tincidunt ante, eget porttitor lectus. Sed vulputate ligula sem, vitae semper lorem rhoncus euismod. Nam non egestas dui, vitae pulvinar neque. Praesent varius vulputate nisl, faucibus pretium erat auctor vel. Pellentesque tempus ligula et lectus sollicitudin semper. Nam sit amet velit velit. Curabitur luctus tincidunt accumsan. Donec ut est in nunc bibendum laoreet. Quisque faucibus turpis ac aliquam viverra. Cras ac justo ullamcorper diam rutrum elementum. Nulla in consectetur ipsum. Morbi placerat, nibh quis convallis ornare, tortor justo finibus leo, hendrerit mattis arcu ante vitae turpis. Vestibulum ac semper magna. Vestibulum ultrices, eros quis rhoncus tincidunt, mi lorem gravida neque, a sollicitudin nibh nunc in tellus.
          			</p>

					<br />
					<ConsentButton text="I AGREE" />
				</div>
			</Centered>
		);
	}
}
