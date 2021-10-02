import React from "react";
import { Translation } from "react-i18next";

/*
TODO load images from Cloudinary
*/
const excoPic = "./images/person.jpg";

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
						{/* TM MISSION */}
						<div className='col'></div>
						{/* TM PITCH */}
						<div className='col'></div>
					</div>
					<div className='row'>
						{/* ABOUT */}
						<div className='col'>
							<div className='text-center'>
								<Translation>
									{(t) => <h3>{t("my_club.about")}</h3>}
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

			{/* ExCo */}
			<div className='col text-center'>
				<div>
					<Translation>{(t) => <h3>{t("my_club.exco")}</h3>}</Translation>
				</div>
				<div>
					<table class='table'>
						<tbody>
							<tr>
								<th scope='col'>President</th>
								<td>
									<img
										src={excoPic}
										height='55'
										alt='Profile pic'
										loading='lazy'
									/>
								</td>
								<td>Gabor Fekete</td>
								<td>
									<button>Contact</button>
								</td>
							</tr>
							<tr>
								<th scope='row'>Vice President of Education</th>
								<td>
									<img
										src={excoPic}
										height='55'
										alt='Profile pic'
										loading='lazy'
									/>
								</td>
								<td>Abraham Hernández Valencia</td>
								<td>
									<button>Contact</button>
								</td>
							</tr>
							<tr>
								<th scope='row'>Vice President of Membership</th>
								<td>
									<img
										src={excoPic}
										height='55'
										alt='Profile pic'
										loading='lazy'
									/>
								</td>
								<td>Bence Ács</td>
								<td>
									<button>Contact</button>
								</td>
							</tr>
							<tr>
								<th scope='row'>Vice President of Public Relations</th>
								<td>
									<img
										src={excoPic}
										height='55'
										alt='Profile pic'
										loading='lazy'
									/>
								</td>
								<td>Judit Saad</td>
								<td>
									<button>Contact</button>
								</td>
							</tr>
							<tr>
								<th scope='row'>Vice President of Mentorship</th>
								<td>
									<img
										src={excoPic}
										height='55'
										alt='Profile pic'
										loading='lazy'
									/>
								</td>
								<td>Klaudia Fodor</td>
								<td>
									<button>Contact</button>
								</td>
							</tr>
							<tr>
								<th scope='row'>Secretary</th>
								<td>
									<img
										src={excoPic}
										height='55'
										alt='Profile pic'
										loading='lazy'
									/>
								</td>
								<td>Kata Dömötör</td>
								<td>
									<button>Contact</button>
								</td>
							</tr>
							<tr>
								<th scope='row'>Treasurer</th>
								<td>
									<img
										src={excoPic}
										height='55'
										alt='Profile pic'
										loading='lazy'
									/>
								</td>
								<td>Zsolt Plázár</td>
								<td>
									<button>Contact</button>
								</td>
							</tr>
							<tr>
								<th scope='row'>Sergeant at Arms</th>
								<td>
									<img
										src={excoPic}
										height='55'
										alt='Profile pic'
										loading='lazy'
									/>
								</td>
								<td>Henry Scullion</td>
								<td>
									<button>Contact</button>
								</td>
							</tr>
							<tr>
								<th scope='row'>IT Support</th>
								<td>
									<img
										src={excoPic}
										height='55'
										alt='Profile pic'
										loading='lazy'
									/>
								</td>
								<td>Henry Scullion</td>
								<td>
									<button>Contact</button>
								</td>
							</tr>
							<tr>
								<th scope='row'>Immediate Past President</th>
								<td>
									<img
										src={excoPic}
										height='55'
										alt='Profile pic'
										loading='lazy'
									/>
								</td>
								<td>Eszter Nagy</td>
								<td>
									<button>Contact</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<section>
				<div className='container my-3'>
					<div className='row'>
						{/* TM MISSION */}
						<div className='col'></div>

						{/* TM PITCH */}
						<div className='col'></div>
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
