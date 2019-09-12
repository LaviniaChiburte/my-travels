import React from 'react';
import './App.css';
import Travels from './Travels';
import Header from './Header';

function App() {
	return (
		<React.Fragment>
			<Header />
			<div style={displaySection}>
				<Travels
					destination="New Delhi"
					country="India"
					image="https://cdn.glitch.com/df838319-9382-43ce-8538-573b42f7eb58%2Fevent-new-delhi-620x370%20(1).jpg?v=1567793496297"
					distance="6000km"
				/>

				<Travels
					destination="Barcelona"
					country="Spain"
					image="https://cdn.glitch.com/df838319-9382-43ce-8538-573b42f7eb58%2Fbarcelona.jpeg?v=1567795481073"
					distance="1200km"
				/>

				<Travels
					destination="London"
					country="United Kingdom"
					image="https://cdn.glitch.com/df838319-9382-43ce-8538-573b42f7eb58%2Flondon_2423609b.jpg?v=1567795496860"
					distance="1500km"
				/>
			</div>
		</React.Fragment>
	);
}

const displaySection = {
	display: 'flex'
};
export default App;
