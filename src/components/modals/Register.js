import React from "react";

/*
 * Components
 */
import RegistrationInfoAccordionItem from "../accordion-items/RegistrationInfo";
import ProfileInfoAccordionItem from "../accordion-items/ProfileInfo";

function Register() {
	return (
		<div className='accordion' id='accordionExample'>
			{/* Registration information */}
			<RegistrationInfoAccordionItem />
			{/* Profile information */}
			<ProfileInfoAccordionItem />
		</div>
	);
}

export default Register;
