import React from "react";
import { Translation, useTranslation } from "react-i18next";
import { Doughnut } from "react-chartjs-2";

function OurClubsSection() {
	const { t } = useTranslation();

	const data = {
		labels: [
			t("page_main.headlines.our_clubs.chart.community_clubs"),
			t("page_main.headlines.our_clubs.chart.corporate_clubs"),
		],
		datasets: [
			{
				data: [20, 5],
				backgroundColor: ["#8d323f", "#235679"],
			},
		],
	};

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
