import React from 'react';

const Travel = ({ destination, country, image, distance }) => (
	<div className="container" style={displayContainer}>
		<div className="row">
			<div className="col s12">
				<img src={image} alt="" className="materialboxed responsive-img" />
				<h4 className="black-text">{destination}</h4>
				<h5 className="pink-text">{country}</h5>
				<h5 className="pink-text">{distance}</h5>
			</div>
		</div>
	</div>
);

const displayContainer = {
	display: 'flex',
	marginBottom: '25px',
	border: '1px solid grey',
	paddingTop: '20px',
	textAlign: 'center'
};

export default Travel;
