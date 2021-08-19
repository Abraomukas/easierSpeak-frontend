import React from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";

const navbarBgColor = { backgroundColor: "#235679" };

function Footer() {
	return (
		<footer className='text-center text-white' style={navbarBgColor}>
			<div className='container p-4'>
				<section>
					<Translation>
						{(t) => (
							<small>
								{t("footer.disclaimer_one")}
								<Link
									className='text-white text-decoration-none'
									to='www.toastmasters.org'>
									Toastmasters International
								</Link>
								. {t("footer.disclaimer_two")}
							</small>
						)}
					</Translation>
				</section>
			</div>

			<div
				className='text-center p-3'
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
				<Translation>
					{(t) => (
						<small>
							<strong>easierSpeak</strong> - {t("footer.note")} Abraomukas
						</small>
					)}
				</Translation>
			</div>
		</footer>
	);
}

export default Footer;
