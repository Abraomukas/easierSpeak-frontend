import React from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";
import i18next from "i18next";
import Cookies from "js-cookie";

/*
 * Components
 */
import DropdownList from "./DropdownList";
import Login from "./Modal";

const navbarBgColor = { backgroundColor: "#235679" };
const btnStyle = {
	borderColor: "#8d323f",
	borderWidth: "medium",
	borderStyle: "solid",
};
const logoPath = "./images/tm-logo.png";
const languages = [
	{ name: "English", country_code: "gb" },
	{ name: "Español", country_code: "es" },
];

function Navbar(props) {
	const isLoggedIn = Cookies.get("isLogged") || false;
	const currentLngCode = Cookies.get("i18next") || "gb";

	const goToDropdown = props.headerSites[0].dropdown.goToDropdown;
	const helpDropdown = props.headerSites[1].dropdown.helpDropdown;
	const dropdowns = [goToDropdown, helpDropdown];

	const thisClubDropdown = props.afterLoginSites[0].dropdown.thisClubDropdown;
	const meetingsDropdown = props.afterLoginSites[1].dropdown.meetingsDropdown;
	const afterLoginDropdowns = [thisClubDropdown, meetingsDropdown];

	return (
		<header>
			<div className='navbar fixed-top navbar-expand-lg' style={navbarBgColor}>
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
							className='btn text-white dropdown-toggle'
							style={btnStyle}
							type='button'
							id='dropdownMenuButton1'
							data-bs-toggle='dropdown'
							aria-expanded='false'>
							<i className='bi bi-globe'></i>
						</button>
						<ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
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

					{/* Profile area */}
					<Translation>
						{(t) => (
							<button
								type='button'
								className='btn text-white'
								style={btnStyle}
								data-bs-toggle='modal'
								data-bs-target='#exampleModal'>
								{t("login")}
							</button>
						)}
					</Translation>
				</div>
			</div>
			<Login />
		</header>
	);
}

export default Navbar;
