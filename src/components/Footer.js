import React from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";

const navbarBgColor = { backgroundColor: "#235679" };

function Footer() {
	return (
		<div>
			<nav className='navbar text-white' style={navbarBgColor}>
				<div className='container-fluid d-flex justify-content-center'>
					<p className='fs-6 fw-lighter'>
						<Translation>
							{(t) => (
								<small>
									<strong>easierSpeak</strong> - {t("footer.note")} Abraomukas
									<br />
									{t("footer.disclaimer_one")}
									<Link
										className='text-white text-decoration-none'
										to='www.toastmasters.org'>
										Toastmasters International
									</Link>
									.<br />
									{t("footer.disclaimer_two")}
								</small>
							)}
						</Translation>
					</p>
				</div>
			</nav>
		</div>
	);
}

export default Footer;
