import React from "react";
import { Translation } from "react-i18next";

/*
 * Components
 */
import DynamicGrid from "../components/DynamicGrid";

function MyClub() {
	return (
		<div className='d-flex flex-column min-vh-100'>
			{/* TITLE */}
			<section>
				<div
					className='d-flex justify-content-center mb-3'
					style={{ marginTop: "7rem" }}>
					<h1>Skylarks Toastmasters Club</h1>
				</div>
			</section>

			<section>
				<div className='container my-3'>
					<div className='row'>
						{/* ABOUT */}
						<div className='col'>
							<div className='text-center'>
								<Translation>
									{(t) => <h3>{t("my_club.about_us")}</h3>}
								</Translation>
							</div>
							<Translation>
								{(t) => (
									<p>
										{t("my_club.welcome")}
										<strong>{t("my_club.env")}</strong>
									</p>
								)}
							</Translation>
							<Translation>
								{(t) => <p>{t("my_club.queries.title")}</p>}
							</Translation>
							<ul>
								<li>
									<Translation>
										{(t) => <p>{t("my_club.queries.q1")}</p>}
									</Translation>
								</li>
								<li>
									<Translation>
										{(t) => <p>{t("my_club.queries.q2")}</p>}
									</Translation>
								</li>
								<li>
									<Translation>
										{(t) => <p>{t("my_club.queries.q3")}</p>}
									</Translation>
								</li>
							</ul>
							<Translation>
								{(t) => <p>{t("my_club.queries.statement")}</p>}
							</Translation>
						</div>
					</div>
				</div>
			</section>

			{/* Roster */}
			<div className='col text-center'>
				<div className='my-3'>
					<Translation>{(t) => <h3>{t("my_club.roster")}</h3>}</Translation>
				</div>

				<div className='container'>
					<DynamicGrid />
				</div>
			</div>

			<section>
				<div className='container my-3'>
					<div className='row'>
						{/* TM MISSION */}
						<div className='col'>
							<div className='my-3 text-center'>
								<Translation>
									{(t) => <h3>{t("my_club.tm_mission")}</h3>}
								</Translation>
							</div>
						</div>

						{/* TM PITCH */}
						<div className='col'>
							<div className='my-3 text-center'>
								<Translation>
									{(t) => <h3>{t("my_club.about_tm")}</h3>}
								</Translation>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SOCIAL */}
			<section>
				<div className='my-3'></div>
			</section>
		</div>
	);
}

export default MyClub;
