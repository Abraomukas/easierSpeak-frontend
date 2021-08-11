import React from "react";
import { Translation } from "react-i18next";

function OurClubsSection() {
	return (
		<section>
			<div className='d-flex flex-row justify-content-center my-3'>
				<Translation>
					{(t) => <h2>{t("page_main.headlines.our_clubs.title")}</h2>}
				</Translation>
			</div>
			<div></div>
		</section>
	);
}

export default OurClubsSection;
