import React from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";

const navbarBgColor = { backgroundColor: "#235679" };

function Footer() {
	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	let current_date = `${year}${"/"}${month}${"/"}${day}`;

	console.log(current_date);
	return (
		<div>
			<nav className='navbar fixed-bottom text-white' style={navbarBgColor}>
				<div className='container-fluid d-flex justify-content-center'>
					<p className='fs-6 fw-lighter'>
						<Translation>
							{(t) => (
								<small>easierSpeak - {t("footer.note")} Abraomukas</small>
							)}
						</Translation>
					</p>
				</div>

				<div className='container-fluid d-flex justify-content-center'>
					<p className='fs-6 fw-lighter'>
						<Translation>
							{(t) => (
								<small>
									{t("footer.disclaimer_one")}
									<Link
										className='text-white text-decoration-none'
										to='www.toastmasters.org'>
										Toastmasters International
									</Link>
									.
								</small>
							)}
						</Translation>
					</p>
				</div>

				<div className='container-fluid d-flex justify-content-center'>
					<p className='fs-6 fw-lighter'>
						<Translation>
							{(t) => <small>{t("footer.disclaimer_two")}</small>}
						</Translation>
					</p>
				</div>

				<div className='container-fluid d-flex justify-content-evenly'>
					<p className='fs-6 fw-lighter'>
						<small>
							<Translation>
								{(t) => (
									<Link
										className='text-white text-decoration-none'
										to='/terms-and-conditions'>
										<strong>
											{t("footer.terms_and_conditions", { current_date })}
										</strong>
									</Link>
								)}
							</Translation>
						</small>
					</p>
					<p className='fs-6 fw-lighter'>
						<small>
							<Translation>
								{(t) => (
									<Link
										className='text-white text-decoration-none'
										to='/privacy-policy'>
										<strong>
											{t("footer.privacy_policy", { current_date })}
										</strong>
									</Link>
								)}
							</Translation>
						</small>
					</p>
				</div>
			</nav>
		</div>
	);
}

export default Footer;
