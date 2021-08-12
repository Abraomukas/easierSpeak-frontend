import React from "react";
import { Translation } from "react-i18next";
import { Doughnut } from "react-chartjs-2";

const data = {
	labels: ["Community Clubs", "Corporate Clubs"],
	datasets: [
		{
			data: [20, 5],
			backgroundColor: ["#8d323f", "#235679"],
		},
	],
};

function OurClubsSection() {
	return (
		<section>
			<div className='d-flex flex-row justify-content-center my-3'>
				<Translation>
					{(t) => <h2>{t("page_main.headlines.our_clubs.title")}</h2>}
				</Translation>
			</div>
			<div>
				<Doughnut
					data={data}
					width={"300"}
					height={"300"}
					options={{ maintainAspectRatio: false }}
				/>
			</div>
		</section>
	);
}

export default OurClubsSection;
