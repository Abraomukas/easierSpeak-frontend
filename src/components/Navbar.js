import React from "react";
import { Link } from "react-router-dom";

/* Components */
import DropdownList from "./DropdownList";

const backgroundColor = { backgroundColor: "rgb(0, 82, 122)" };

const logoPath = "./images/tm-logo.png";

function Navbar(props) {
	const meetingsDropdown = props.headerSites[0].dropdown.meetingsDropdown;
	const thisClubDropdown = props.headerSites[1].dropdown.thisClubDropdown;
	const goToDropdown = props.headerSites[2].dropdown.goToDropdown;
	const helpDropdown = props.headerSites[3].dropdown.helpDropdown;

	const dropdowns = [
		meetingsDropdown,
		thisClubDropdown,
		goToDropdown,
		helpDropdown,
	];

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
										<li key={index} className='nav-item dropdown'>
											<Link
												className='nav-link dropdown-toggle'
												to=''
												id='navbarDropdown'
												role='button'
												data-bs-toggle='dropdown'
												aria-expanded='false'>
												{linkObj.label}
											</Link>
											<DropdownList dropdown={dropdowns[index]} />
										</li>
									);
								})}
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
