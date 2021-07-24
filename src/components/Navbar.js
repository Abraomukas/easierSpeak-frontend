import React from "react";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

/*
 * Components
 */
import DropdownList from "./DropdownList";
import { Translation } from "react-i18next";

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
							<Translation>
								{(t) => (
									<Link className='navbar-brand text-white fw-bold' to='/'>
										{t("title")} {props.clubName}
									</Link>
								)}
							</Translation>
						</div>

						{/* Sections */}
						<div className='collapse navbar-collapse'>
							<ul className='navbar-nav'>
								{props.headerSites.map((linkObj, index) => {
									return (
										<li key={index} className='nav-item dropdown'>
											<Link
												className='nav-link dropdown-toggle text-white text-decoration-none'
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
						<Translation>
							{(t) => (
								<Link className='btn btn-primary' role='button'>
									{t("login")}
								</Link>
							)}
						</Translation>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Navbar;
