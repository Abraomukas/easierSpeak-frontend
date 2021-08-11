import React from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";

/*
 * Components
 */
import Carousel from "../components/Carousel";
import Square from "../components/Square";

const buttonBgColor = { backgroundColor: "#8d323f" };
const squareColor = "#235679";

function Main() {
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
						<Square number='100' title='MEMBERS' />
						<div
							className='flex-column mx-3 align-items-center justify-content-evenly'
							style={{
								display: "flex",
								width: 200,
								height: 200,
								backgroundColor: squareColor,
								boxShadow: "1px 1px 10px 15px rgba(0, 0, 0, 0.2)",
							}}>
							<h1 className='text-white'>123</h1>
							<h3 className='text-white'>CLUBS</h3>
						</div>
						<div
							className='mx-3'
							style={{
								display: "flex",
								width: 200,
								height: 200,
								backgroundColor: squareColor,
							}}></div>
						<div
							className='mx-3'
							style={{
								display: "flex",
								width: 200,
								height: 200,
								backgroundColor: squareColor,
							}}></div>
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
