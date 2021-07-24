import React from "react";

const navbarBgColor = { backgroundColor: "#235679" };

function Footer() {
	return (
		<div>
			<nav
				className='navbar fixed-bottom text-white d-flex justify-content-center'
				style={navbarBgColor}>
				<p>
					<small>easierSpeak - a side project by Abraomukas</small>
				</p>
			</nav>
		</div>
	);
}

export default Footer;
