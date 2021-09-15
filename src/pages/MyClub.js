import React from "react";
import { Translation } from "react-i18next";

function MyClub() {
	return (
		<div className='d-flex flex-column min-vh-100'>
			{/* TITLE */}
			<section>
				<div
					className='d-flex justify-content-center'
					style={{ marginTop: "7rem" }}>
					<h1>Skylarks Toastmasters Club</h1>
				</div>
			</section>

			{/* ABOUT */}
			<section>
				<div className='my-3'>
					<Translation>{(t) => <h3>{t("my_club.about")}</h3>}</Translation>
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
			</section>

			{/* CLUB DETAILS */}
			{/* TM MISSION */}
			{/* TM PITCH */}
			<section>
				<div className='mh-100'></div>
			</section>

			{/* SOCIAL */}
			<section>
				<div className='mh-100'></div>
			</section>
		</div>
	);
}

export default MyClub;
