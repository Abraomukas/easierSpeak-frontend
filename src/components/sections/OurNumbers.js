import React from "react";
import Fade from "react-reveal/Fade";
import { Translation, useTranslation } from "react-i18next";

/*
 * Components
 */
import Square from "../Square";

function OurNumbers() {
	const { t } = useTranslation();

	return (
		<section>
			<div className='d-flex flex-row justify-content-center my-3'>
				<Translation>
					{(t) => <h2>{t("page_main.headlines.our_numbers.title")}</h2>}
				</Translation>
			</div>
			<div className='d-flex flex-row justify-content-center'>
				{/* # of members */}
				<Fade left>
					<Square
						number='111'
						title={t("page_main.headlines.our_numbers.square_members")}
					/>
				</Fade>
				{/* # of clubs */}
				<Fade left>
					<Square
						number='222'
						title={t("page_main.headlines.our_numbers.square_clubs")}
					/>
				</Fade>
				{/* # of areas */}
				<Fade right>
					<Square
						number='333'
						title={t("page_main.headlines.our_numbers.square_areas")}
					/>
				</Fade>
				{/* # of countries */}
				<Fade right>
					<Square
						number='444'
						title={t("page_main.headlines.our_numbers.square_countries")}
					/>
				</Fade>
			</div>
		</section>
	);
}

export default OurNumbers;
