import React from 'react';

const Travels = ({ destination, country, image, distance }) => (
	<div class="container" style={displayContainer}>
		<div class="row">
			<div class="col s12">
				<img src={image} alt="" class="materialboxed responsive-img" />
				<h4 className="black-text">{destination}</h4>
				<h5 className="pink-text">{country}</h5>
				<h5 className="pink-text">{distance}</h5>
			</div>
		</div>
	</div>
);

const displayContainer = {
	display: 'flex'
};

export default Travels;
