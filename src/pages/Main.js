import React from "react";
import { Link } from "react-router-dom";
import { Translation, useTranslation } from "react-i18next";

/*
 * Components
 */
import Carousel from "../components/Carousel";
import Square from "../components/Square";

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
					<div className='d-flex flex-row my-3'>
						<h2>OUR MEMBERS</h2>
					</div>
					<div className='d-flex flex-row-reverse my-3'>
						<h2>OUR CLUBS</h2>
					</div>
					<div className='d-flex flex-row justify-content-center my-3'>
						<h2>OUR NUMBERS</h2>
					</div>
					<div className='d-flex flex-row justify-content-center'>
						<Square
							number='111'
							title={t("page_main.headlines.our_numbers.square_members")}
						/>
						<Square
							number='222'
							title={t("page_main.headlines.our_numbers.square_clubs")}
						/>
						<Square
							number='333'
							title={t("page_main.headlines.our_numbers.square_areas")}
						/>
						<Square
							number='444'
							title={t("page_main.headlines.our_numbers.square_countries")}
						/>
					</div>
					<div className='d-flex flex-row justify-content-center 	my-3'>
						<h2>OUR CORPORATE CLUBS</h2>
					</div>
				</div>
			</section>
			{/* number of clubs  with pie chart representation */}
			{/* number of events with graph representation */}
			{/* number of members */}
			{/* number of events  */}
			{/* number of areas */}
			{/* number of countries */}

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
