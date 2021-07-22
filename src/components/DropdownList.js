import React from "react";
import { Link } from "react-router-dom";

function DropdownList(props) {
	return (
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
	);
}

export default DropdownList;
