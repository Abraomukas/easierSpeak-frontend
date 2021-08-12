import React from "react";
import { Link } from "react-router-dom";
import { Translation, useTranslation } from "react-i18next";
import { Progress } from "semantic-ui-react";

/*
 * Components
 */
import Carousel from "../components/Carousel";
import OurNumbersSection from "../components/OurNumbersSetion";
import OurCorpoClubsSection from "../components/OurCorpoClubsSection";
import OurClubsSection from "../components/OurClubsSection";
import OurMembersSection from "../components/OurMembersSection";

const buttonBgColor = { backgroundColor: "#8d323f" };

function Main() {
	const { t } = useTranslation();

	return (
		<div
			data-bs-spy='scroll'
			data-bs-target='#navbar-example2'
			data-bs-offset='0'
			className='scrollspy-example'
			tabIndex='0'>
			{/* Carousel */}
			<section>
				<div
					className='d-flex justify-content-center'
					style={{ marginTop: "7rem", marginBottom: "7rem" }}>
					<Carousel />
				</div>
			</section>
			{/* easierSpeak stats */}
			<section>
				<div className='container'>
					<OurMembersSection />
					<OurClubsSection />
					<OurNumbersSection />
					<OurCorpoClubsSection />
				</div>
			</section>

			<div className='d-flex justify-content-center'>
				{/* Sign in button */}
				<Translation>
					{(t) => (
						<Link
							to='/register'
							className='btn btn-lg text-white w-30 my-3'
							style={buttonBgColor}
							role='button'>
							{t("page_main.button")}
						</Link>
					)}
				</Translation>
			</div>
		</div>
	);
}

export default Main;
