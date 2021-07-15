import React from "react";
import { Link } from "react-router-dom";

const backgroundColor = { backgroundColor: "rgb(0, 82, 122)" };

const logoPath = "./images/tm-logo.png";
const meetingsPath = "./images/meetings.png";
const clubsPath = "./images/clubs.png";
const faqsPath = "./images/faqs.png";

const iconStyle = { marginTop: "2px" };

function Navbar(props) {
	return (
		<div>
			<header>
				<div className='navbar' style={backgroundColor}>
					<div className='container-fluid'>
						{/* Brand */}
						<div className='d-flex align-items-center'>
							<Link className='navbar-brand' to='/'>
								<img
									src={logoPath}
									height='75'
									alt='easierSpeak'
									loading='lazy'
									style={iconStyle}
								/>
							</Link>
							<Link className='navbar-brand text-white' to='/'>
								easierSpeak
							</Link>
						</div>
						{/* Sections */}
						<ul className='nav'>
							<li>
								<div className='d-flex flex-column align-items-center'>
									<Link to='#' className='nav-link'>
										<img
											src={meetingsPath}
											height='40'
											alt='Meetings'
											loading='lazy'
											style={iconStyle}
										/>
									</Link>
									<p className='text-white'>Meetings</p>
								</div>
							</li>
							<li>
								<div className='d-flex flex-column align-items-center'>
									<Link to='#' className='nav-link'>
										<img
											src={clubsPath}
											height='40'
											alt='Clubs'
											loading='lazy'
											style={iconStyle}
										/>
									</Link>
									<p className='text-white'>Clubs</p>
								</div>
							</li>
							<li>
								<div className='d-flex flex-column align-items-center'>
									<Link to='#' className='nav-link'>
										<img
											src={faqsPath}
											height='40'
											alt='FAQs'
											loading='lazy'
											style={iconStyle}
										/>
									</Link>
									<p className='text-white'>FAQs</p>
								</div>
							</li>
						</ul>
						{/* Profile */}
						<Link className='btn btn-primary' to='/login' role='button'>
							Login
						</Link>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Navbar;
