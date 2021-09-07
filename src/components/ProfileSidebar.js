import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { Translation } from "react-i18next";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { login } from "../actions/";

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
	let exCoRole = "Vice President of Education";

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
				<div class='card-footer border-light text-white text-center'>
					<p className='fw-bold'>{tmClub}</p>
					<p>({exCoRole})</p>
				</div>

				{/* NEXT MEETING */}
				{/* MY PROFILE */}
				<Translation>
					{(t) => (
						<Link className='text-white mb-3' to='#'>
							{t("sidebar.my_profile")}
						</Link>
					)}
				</Translation>
				{/* MY CLUB */}
				<Translation>
					{(t) => (
						<Link className='text-white mb-3' to='#'>
							{t("sidebar.my_club")}
						</Link>
					)}
				</Translation>
				{/* EXCO ROLE TASKS */}

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
