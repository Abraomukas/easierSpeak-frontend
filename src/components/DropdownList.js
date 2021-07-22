import React from "react";
import { Link } from "react-router-dom";

function DropdownList(props) {
	return (
		<div className='collapse navbar-collapse'>
			<ul className='navbar-nav'>
				<li className='nav-item dropdown'>
					<Link
						className='nav-link dropdown-toggle'
						to='#'
						id='navbarDropdown'
						role='button'
						data-bs-toggle='dropdown'
						aria-expanded='false'>
						{props.label}{" "}
					</Link>
					<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
						{props.dropdown.map((linkObj, index) => {
							return (
								<li key={index}>
									<Link className='dropdown-item' to={linkObj.path}>
										{linkObj.label}
									</Link>
								</li>
							);
						})}
					</ul>
				</li>
			</ul>
		</div>
	);
}

export default DropdownList;
