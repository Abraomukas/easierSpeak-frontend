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
				<div className='navbar navbar-expand-lg' style={backgroundColor}>
					<div className='container-fluid'>
						{/* Logo */}
						<div className='d-flex justify-content-start align-items-center'>
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
						<div className='d-flex justify-content-end'>
							<ul className='nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small'>
								<li>
									<div className='mx-1 d-flex flex-column align-items-center'>
										<Link to='#' className='nav-link'>
											<img
												src={meetingsPath}
												height='40'
												alt='easierSpeak'
												loading='lazy'
												style={iconStyle}
											/>
										</Link>
										<p className='text-white'>Meetings</p>
									</div>
								</li>
								<li>
									<div className='mx-1 d-flex flex-column align-items-center'>
										<Link to='#' className='nav-link'>
											<img
												src={clubsPath}
												height='40'
												alt='easierSpeak'
												loading='lazy'
												style={iconStyle}
											/>
										</Link>
										<p className='text-white'>Clubs</p>
									</div>
								</li>
								<li>
									<div className='mx-1 d-flex flex-column align-items-center'>
										<Link to='#' className='nav-link'>
											<img
												src={faqsPath}
												height='40'
												alt='easierSpeak'
												loading='lazy'
												style={iconStyle}
											/>
										</Link>
										<p className='text-white'>FAQs</p>
									</div>
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
