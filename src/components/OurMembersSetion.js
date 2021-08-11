import React from "react";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

/*
 * Components
 */
import Square from "../components/Square";

function OurMembersSection() {
	const { t } = useTranslation();

	return (
		<section>
			<div className='d-flex flex-row justify-content-center my-3'>
				<h2>OUR NUMBERS</h2>
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

export default OurMembersSection;
