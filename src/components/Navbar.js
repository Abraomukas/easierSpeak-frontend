import React from "react";
import { Link } from "react-router-dom";

const backgroundColor = { backgroundColor: "rgb(0, 82, 122)" };
const logoPath = "./images/tm-logo.png";
const logoStyle = { marginTop: "2px" };

function Navbar(props) {
	return (
		<div>
			<header>
				<div className='px-3 text-white' style={backgroundColor}>
					<div className='container-fluid'>
						{/* Logo */}
						<div className='d-flex navbar-brand justify-content-start'>
							<Link to='/'>
								<img
									src={logoPath}
									height='100'
									alt='easierSpeak'
									loading='lazy'
									style={logoStyle}
								/>
							</Link>{" "}
							<Link className='navbar-brand' to='/'>
								easierSpeak
							</Link>
						</div>
						<div className='d-flex justify-content-end'>
							<ul className='nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small'>
								<li>
									<Link to='#' className='nav-link text-secondary'>
										<svg
											className='bi d-block mx-auto mb-1'
											width='24'
											height='24'>
											<use xlinkHref='#home'></use>
										</svg>
										Home
									</Link>
								</li>
								<li>
									<Link to='#' className='nav-link text-white'>
										<svg
											className='bi d-block mx-auto mb-1'
											width='24'
											height='24'>
											<use xlinkHref='#speedometer2'></use>
										</svg>
										Meetings
									</Link>
								</li>
								<li>
									<Link to='#' className='nav-link text-white'>
										<svg
											className='bi d-block mx-auto mb-1'
											width='24'
											height='24'>
											<use xlinkHref='#table'></use>
										</svg>
										Clubs
									</Link>
								</li>
								<li>
									<Link to='#' className='nav-link text-white'>
										<svg
											className='bi d-block mx-auto mb-1'
											width='24'
											height='24'>
											<use xlinkHref='#grid'></use>
										</svg>
										FAQs
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Navbar;
