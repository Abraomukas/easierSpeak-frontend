import React from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";
import { useSelector } from "react-redux";
import i18next from "i18next";
import cookies from "js-cookie";

/*
 * Components
 */
import DropdownList from "./DropdownList";

const navbarBgColor = { backgroundColor: "#235679" };
const buttonBgColor = { backgroundColor: "#8d323f" };
const logoPath = "./images/tm-logo.png";
const languages = [
	{ name: "English", country_code: "gb" },
	{ name: "Español", country_code: "es" },
];

function Navbar(props) {
	const isLoggedIn = useSelector((state) => state.isLogged);
	const currentLngCode = cookies.get("i18next") || "gb";

	const goToDropdown = props.headerSites[0].dropdown.goToDropdown;
	const helpDropdown = props.headerSites[1].dropdown.helpDropdown;
	const dropdowns = [goToDropdown, helpDropdown];

	const thisClubDropdown = props.afterLoginSites[0].dropdown.thisClubDropdown;
	const meetingsDropdown = props.afterLoginSites[1].dropdown.meetingsDropdown;
	const afterLoginDropdowns = [thisClubDropdown, meetingsDropdown];

	return (
		<div>
			<header>
				<div
					className='navbar fixed-top navbar-expand-lg'
					style={navbarBgColor}>
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
										{t("title")} {isLoggedIn ? " - " + props.clubName : ""}
									</Link>
								)}
							</Translation>
						</div>

						{/* Sections */}
						<div className='collapse navbar-collapse'>
							<ul className='navbar-nav'>
								{isLoggedIn &&
									props.afterLoginSites.map((linkObj, index) => {
										return (
											<li key={index} className='nav-item dropdown'>
												<Translation>
													{(t) => (
														<Link
															className='nav-link dropdown-toggle text-white text-decoration-none'
															to={linkObj.path}
															id='navbarDropdown'
															role='button'
															data-bs-toggle='dropdown'
															aria-expanded='false'>
															{t(linkObj.label)}
														</Link>
													)}
												</Translation>
												<DropdownList dropdown={afterLoginDropdowns[index]} />
											</li>
										);
									})}
								{props.headerSites.map((linkObj, index) => {
									return (
										<li key={index} className='nav-item dropdown'>
											<Translation>
												{(t) => (
													<Link
														className='nav-link dropdown-toggle text-white text-decoration-none'
														to={linkObj.path}
														id='navbarDropdown'
														role='button'
														data-bs-toggle='dropdown'
														aria-expanded='false'>
														{t(linkObj.label)}
													</Link>
												)}
											</Translation>
											<DropdownList dropdown={dropdowns[index]} />
										</li>
									);
								})}
							</ul>
						</div>

						{/* Language selector */}
						<div className='dropdown mx-3'>
							<button
								className='btn btn-secondary dropdown-toggle'
								style={buttonBgColor}
								type='button'
								id='dropdownMenuButton1'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								<i className='bi bi-globe'></i>
							</button>
							<ul
								className='dropdown-menu'
								aria-labelledby='dropdownMenuButton1'>
								{languages.map(({ name, country_code, index }) => {
									return (
										<li key={index}>
											<button
												className='dropdown-item'
												onClick={() => i18next.changeLanguage(country_code)}
												disabled={country_code === currentLngCode}>
												<span
													className={`flag-icon flag-icon-${country_code} mx-3`}
													style={{
														opacity: country_code === currentLngCode ? 0.5 : 1,
													}}></span>
												{name}
											</button>
										</li>
									);
								})}
							</ul>
						</div>

						{/* Profile */}
						<Translation>
							{(t) => (
								<Link
									to='/login'
									className='btn text-white'
									style={buttonBgColor}
									role='button'>
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
