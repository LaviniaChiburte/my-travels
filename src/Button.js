import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';

export default function ButtonRouter() {
	return (
		<div className="container" style={displayContainer}>
			<Button
				style={displayButton}
				className="buton"
				color="secondary"
				variant="contained"
				size="large"
			>
				Click me!
			</Button>
			<Button className="buton" color="primary" variant="outlined" size="large">
				Avoid me
			</Button>
		</div>
	);
}

const displayButton = {
	margin: '20px'
};

const displayContainer = {
	textAlign: 'center'
};
