import React from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";

/*
 * Components
 */
import Carousel from "../components/Carousel";

const buttonBgColor = { backgroundColor: "#8d323f" };

function Main() {
	return (
		<div
			data-bs-spy='scroll'
			data-bs-target='#navbar-example2'
			data-bs-offset='0'
			className='scrollspy-example'
			tabindex='0'>
			<div className='d-flex justify-content-center'>
				{/* Carousel */}
				<Carousel />
			</div>
			{/* easierSpeak in numbers */}
			<div className='d-flex justify-content-center mt-3'>
				<h2>OUR MEMBERS</h2>
			</div>
			<div className='d-flex justify-content-center mt-3'>
				<h2>OUR CLUBS</h2>
			</div>
			<div className='d-flex justify-content-center mt-3'>
				<h2>CORPORATE CLUBS</h2>
			</div>
			<div className='d-flex justify-content-center mt-3'>
				<h2>OUR NUMBERS</h2>
			</div>
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
							className='btn text-white w-30 my-3'
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
