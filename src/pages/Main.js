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
		<div className='position-absolute top-50 start-50 translate-middle'>
			{/* Carousel */}
			<Carousel />
			{/* easierSpeak in numbers */}
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
