import React from "react";
import { Translation } from "react-i18next";

function OurMembersSection() {
	return (
		<section>
			<div className='d-flex flex-row justify-content-center my-3'>
				<Translation>
					{(t) => <h2>{t("page_main.headlines.our_members.title")}</h2>}
				</Translation>
			</div>
		</section>
	);
}

export default OurMembersSection;
