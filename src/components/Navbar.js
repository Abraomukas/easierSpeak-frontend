import React from "react";
import { Link } from "react-router-dom";

const backgroundColor = { backgroundColor: "rgb(0, 82, 122)" };

const logoPath = "./images/tm-logo.png";

function Navbar(props) {
	return (
		<div>
			<header>
				<div className='navbar navbar-expand-lg' style={backgroundColor}>
					<div className='container-fluid'>
						{/* Brand */}
						<div className='d-flex align-items-center'>
							<Link className='navbar-brand' to='/'>
								<img
									src={logoPath}
									height='55'
									alt='easierSpeak'
									loading='lazy'
								/>
							</Link>
							<Link className='navbar-brand text-white' to='/'>
								easierSpeak
							</Link>
						</div>
						{/* Sections */}
						<div className='collapse navbar-collapse'>
							<ul className='navbar-nav'>
								{props.headerSites.map((linkObj, index) => {
									return (
										<li key={index} className='nav-item'>
											<Link className='nav-link active' to={linkObj.path}>
												{linkObj.label}
											</Link>
										</li>
									);
								})}
								<li className='nav-item dropdown'>
									<Link
										className='nav-link dropdown-toggle'
										to=''
										id='navbarDropdown'
										role='button'
										data-bs-toggle='dropdown'
										aria-expanded='false'>
										Our services
									</Link>
									<ul
										className='dropdown-menu'
										aria-labelledby='navbarDropdown'>
										{props.dropdown.map((linkObj, index) => {
											return (
												<li key={index}>
													<Link className='dropdown-item' to={linkObj.path}>
														{linkObj.label}
													</Link>
												</li>
											);
										})}
									</ul>
								</li>
							</ul>
						</div>

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
