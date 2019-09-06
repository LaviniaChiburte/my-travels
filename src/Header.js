import React from 'react';

function Header() {
	return (
		<header style={headerStyle}>
			<h1 className="center white-text">
				<span className="pink-text"> My </span>Travels
			</h1>
		</header>
	);
}

const headerStyle = {
	background: '#333',
	color: 'white',
	textAlign: 'center',
	padding: '10px'
};

export default Header;
