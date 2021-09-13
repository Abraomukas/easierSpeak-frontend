import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { Translation } from "react-i18next";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { login } from "../actions/";
import { excoRoleFunctions } from "../utils/exco";

function ProfileSidebar(props) {
	/*
    TODO fetch image from Cloudinary
    */
	let profilePicPath = "./images/abraomukas.jpg";

	/*
	TODO fetch data from MongoDB
	*/
	let username = "Abraomukas";
	let tmClub = "Skylarks TM";
	let role = "Vice President of Education";
	const roleTasks = excoRoleFunctions(role);

	const sidebarStyle = {
		backgroundColor: "#235679",
		width: "250px",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		position: "fixed",
	};

	const sideNavInactiveStyle = {
		right: "-100%",
		transition: "850ms",
	};

	const sideNavActiveStyle = {
		right: 0,
		transition: "350ms",
	};

	const dispatch = useDispatch();

	const logout = () => {
		dispatch(login());
		Cookies.remove("isLogged");
		window.location.reload();
	};

	return (
		<div
			style={
				props.sidebar
					? { ...sidebarStyle, ...sideNavActiveStyle }
					: { ...sidebarStyle, ...sideNavInactiveStyle }
			}>
			<div className='d-flex flex-column align-items-center'>
				{/* CLOSE ICON */}
				<AiOutlineClose
					className='text-white mt-3 mb-5'
					style={{ marginLeft: "80%", fontSize: "2rem", background: "none" }}
				/>

				{/* PROFILE PICTURE */}
				<img
					src={profilePicPath}
					className='rounded pill'
					alt='Profie pic'
					style={{ maxWidth: "30%", maxHeight: "50%" }}
				/>

				{/* WELCOME */}
				<Translation>
					{(t) => (
						<p className='text-white fs-5 mt-3'>
							{t("sidebar.welcome")} {username}
						</p>
					)}
				</Translation>

				{/* CURRENT STATUS */}
				<div className='card-footer border-light' />
				<div className='text-white text-center'>
					<p className='fw-bold'>{tmClub}</p>
					<p>({role})</p>
				</div>
				<div className='card-footer border-light' />

				{/* MY PROFILE */}
				<div className='accordion mb-3' id='profileAccordion'>
					<div
						className='accordion-item'
						style={{ backgroundColor: "transparent" }}>
						<h2 className='accordion-header' id='profileHeadingOne'>
							<Translation>
								{(t) => (
									<button
										className='btn btn-secondary accordion-button text-white fs-6 text-center'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#profileCollapse'
										aria-expanded='true'
										aria-controls='profileCollapse'
										style={{ backgroundColor: "transparent", width: "200px" }}>
										{t("sidebar.my_profile.title")}
									</button>
								)}
							</Translation>
						</h2>
						<div
							id='profileCollapse'
							className='accordion-collapse collapse show'
							aria-labelledby='profileHeadingOne'
							data-bs-parent='#profileAccordion'>
							<div className='accordion-body d-flex flex-column align-items-start'>
								<Translation>
									{(t) => (
										<Link className='text-white mb-3' to='#'>
											{t("sidebar.my_profile.personal_data")}
										</Link>
									)}
								</Translation>
								<Translation>
									{(t) => (
										<Link className='text-white mb-3' to='#'>
											{t("sidebar.my_profile.ti_data")}
										</Link>
									)}
								</Translation>
								<Translation>
									{(t) => (
										<Link className='text-white mb-3' to='#'>
											{t("sidebar.my_profile.config")}
										</Link>
									)}
								</Translation>
							</div>
						</div>
					</div>
				</div>

				{/* MY PARTICIPATION */}
				<div className='accordion mb-3' id='participationAccordion'>
					<div
						className='accordion-item'
						style={{ backgroundColor: "transparent" }}>
						<h2 className='accordion-header' id='participationHeading'>
							<Translation>
								{(t) => (
									<button
										className='btn btn-secondary accordion-button text-white fs-6 text-center'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#participationCollapse'
										aria-expanded='true'
										aria-controls='participationCollapse'
										style={{ backgroundColor: "transparent", width: "200px" }}>
										{t("sidebar.my_participation.title")}
									</button>
								)}
							</Translation>
						</h2>
						<div
							id='participationCollapse'
							className='accordion-collapse collapse'
							aria-labelledby='participationHeading'
							data-bs-parent='#participationAccordion'>
							<div className='accordion-body d-flex flex-column align-items-start'>
								<Translation>
									{(t) => (
										<Link className='text-white mb-3' to='#'>
											{t("sidebar.my_participation.next_meeting")}
										</Link>
									)}
								</Translation>
								<Translation>
									{(t) => (
										<Link className='text-white mb-3' to='#'>
											{t("sidebar.my_participation.request_speech")}
										</Link>
									)}
								</Translation>
								<Translation>
									{(t) => (
										<Link className='text-white mb-3' to='#'>
											{t("sidebar.my_participation.speech_progress")}
										</Link>
									)}
								</Translation>
							</div>
						</div>
					</div>
				</div>

				{/* EXCO ROLE TASKS */}
				{role !== "Member" && (
					<div className='accordion mb-3' id='excoAccordion'>
						<div
							className='accordion-item'
							style={{ backgroundColor: "transparent" }}>
							<h2 className='accordion-header' id='excoHeading'>
								<Translation>
									{(t) => (
										<button
											className='btn btn-secondary accordion-button text-white fs-6 text-center'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#excoCollapse'
											aria-expanded='true'
											aria-controls='excoCollapse'
											style={{
												backgroundColor: "transparent",
												width: "200px",
											}}>
											{t("sidebar.exco.vpe.tasks")}
										</button>
									)}
								</Translation>
							</h2>
							<div
								id='excoCollapse'
								className='accordion-collapse collapse'
								aria-labelledby='excoHeading'
								data-bs-parent='#excoAccordion'>
								<div className='accordion-body d-flex flex-column align-items-start'>
									{roleTasks.map((linkObj, index) => {
										return (
											<Translation>
												{(t) => (
													<Link
														key={index}
														className='text-white mb-3'
														to={linkObj.path}>
														{t(linkObj.label)}
													</Link>
												)}
											</Translation>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				)}

				{/* LOGOUT */}
				<Translation>
					{(t) => (
						<button type='button' className='btn btn-danger' onClick={logout}>
							{t("sidebar.logout")}
						</button>
					)}
				</Translation>
			</div>
		</div>
	);
}

export default ProfileSidebar;
