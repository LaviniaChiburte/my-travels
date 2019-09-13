import React from 'react';
import Travel from './Travel';
import './App.css';

const travels = [
	{
		destination: 'New Delhi',
		country: 'India',
		image:
			'https://cdn.glitch.com/df04bd6a-ac99-477c-983b-95d1ac67c725%2Fevent-new-delhi-620x370%20(1).jpg?v=1568351402171',
		distance: '6000km'
	},

	{
		destination: 'Barcelona',
		country: 'Spain',
		image:
			'https://cdn.glitch.com/c36c65e0-89a2-4ebc-a770-de7adc69bcce%2Fbarcelona_2.webp?v=1568350858776',
		distance: '6000km'
	},
	{
		destination: 'London',
		country: 'United Kingdom',
		image:
			'https://cdn.glitch.com/df838319-9382-43ce-8538-573b42f7eb58%2Flondon_2423609b.jpg?v=1567795496860',
		distance: '1500km'
	},

	{
		destination: 'Oslo',
		country: 'Norway',
		image:
			'https://cdn.glitch.com/df04bd6a-ac99-477c-983b-95d1ac67c725%2FBarcelona_at_golden_hour_Credit_iStock_Eloi_Omella.jpg?v=1568351304274',
		distance: '500km'
	},
	{
		destination: 'Budapest',
		country: 'Hungary',
		image:
			'https://cdn.glitch.com/df04bd6a-ac99-477c-983b-95d1ac67c725%2Fbudapest.jpg?v=1568351020486',
		distance: '700km'
	}
];

const Travels = () => (
	<div>
		{travels.map(travel => (
			<Travel {...travel} />
		))}
	</div>
);

export default Travels;
