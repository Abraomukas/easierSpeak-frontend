import React from "react";

function MyClub() {
	return (
		<div className='d-flex flex-column min-vh-100'>
			{/* TITLE */}
			<section>
				<div className='d-flex justify-content-center' style={{ marginTop: "7rem" }}>
					<h1>Skylarks Toastmasters Club</h1>
				</div>
			</section>

			{/* ABOUT */}
			<section>
				<div className='my-3'>
					<h3>About our club</h3>
					<p>
						Welcome to our Toastmasters Club . We are an English language public
						speaking and leadership club that is part of a worldwide
						Toastmasters Organization. Both native and non-native English
						speakers have opportunity to hone their speaking, listening and
						leadership skills in our Club.
					</p>
					<p>
						<strong>
							A FRIENDLY AND MUTUALLY SUPPORTIVE LEARNING ENVIRONMENT
						</strong>
					</p>
					<p>
						Our members are committed to help each other improve their public
						speaking and leadership skills.
					</p>
					<ul>
						<li>
							<p>Do you want to express yourself better in front of people?</p>
						</li>
						<li>
							<p>Are you dreaming of a more efficient self-expression style?</p>
						</li>
						<li>
							<p>Do you want to enhance your leadership qualities?</p>
						</li>
					</ul>
					<p>
						Whatever your aim is, Toastmasters provides you a friendly and
						mutually supportive learning environment that helps you achieve your
						personal goals.
					</p>
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
