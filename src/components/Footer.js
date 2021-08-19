import React from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";

const navbarBgColor = { backgroundColor: "#235679" };

function Footer() {
	return (
		<footer class='text-center text-white' style={navbarBgColor}>
			<div class='container p-4'>
				<section class='mb-4'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
						distinctio earum repellat quaerat voluptatibus placeat nam, commodi
						optio pariatur est quia magnam eum harum corrupti dicta, aliquam
						sequi voluptate quas.
					</p>
				</section>
			</div>

			<div
				class='text-center p-3'
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
