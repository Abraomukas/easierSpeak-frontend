import React from "react";
import { Link } from "react-router-dom";

function ProfileDashboard() {
	/*
    TODO fetch image from Cloudinary
    */
	let profilePicPath = "./images/abraomukas.jpg";

	const sideNavStyle = {
		width: "240px",
		backgroundColor: "#235679",
		position: "absolute",
		height: "95vh",
		padding: "0 30px",
		transition: "all 1s",
	};

	return (
		<ul className='navbar-nav ms-auto align-items-center'>
			{/* Notifications */}
			<li className='nav-item dropdown me-3 me-lg-1'>
				<Link
					className='nav-link dropdown-toggle hidden-arrow'
					to='/'
					id='navbarDropdownMenuLink'
					role='button'
					data-mdb-toggle='dropdown'
					aria-expanded='false'>
					<i className='fas fa-bell fa-lg text-white'></i>
					<span className='badge rounded-pill badge-dot bg-danger'></span>
				</Link>
			</li>

			{/* Messages */}
			<li className='nav-item dropdown me-3 me-lg-1'>
				<Link
					className='nav-link dropdown-toggle hidden-arrow'
					to='/'
					id='navbarDropdownMenuLink'
					role='button'
					data-mdb-toggle='dropdown'
					aria-expanded='false'>
					<i className='fas fa-comments fa-lg text-white'></i>

					<span className='badge rounded-pill badge-dot bg-danger'></span>
				</Link>
			</li>

			{/* Avatar */}
			<li className='nav-item me-3 me-lg-1'>
				<button className='nav-link d-sm-flex btn text-white dropdown-toggle align-items-center'>
					<img
						src={profilePicPath}
						className='rounded-pill'
						height='55'
						alt=''
						loading='lazy'
					/>
				</button>
			</li>

			{/* SIDE NAV TO BE ADDED HERE */}
			<div className=''></div>
		</ul>
	);
}

export default ProfileDashboard;
