import React from 'react';
import Header from './Header';
import Button from './Button';
import TextField from './Alarm';
import './App.css';
import Travels from './Travels';

function App() {
	return (
		<React.Fragment>
			<Button />
			<TextField />
			<Header />
			<div className="container" style={displaySection}>
				<Travels />
			</div>
		</React.Fragment>
	);
}

const displaySection = {
	display: 'flex'
};
export default App;
