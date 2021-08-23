import React from "react";
import { Translation } from "react-i18next";

/*
 * Components
 */
import ProfileInfoAccIFullNameAndVisibility from "../ProfileInfoAccIFullNameAndVisibility";
import ProfileInfoAccIAddressPhoneAndVisibility from "../ProfileInfoAccIAddressPhoneAndVisibility";

function ProfileInfoAccordionItem() {
	return (
		<div className='accordion-item'>
			<h2 className='accordion-header' id='headingTwo'>
				<Translation>
					{(t) => (
						<button
							className='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseTwo'
							aria-expanded='false'
							aria-controls='collapseTwo'>
							{t("modal_register.profile_info")}
						</button>
					)}
				</Translation>
			</h2>
			<div
				id='collapseTwo'
				className='accordion-collapse collapse'
				aria-labelledby='headingTwo'
				data-bs-parent='#accordionExample'>
				<div className='accordion-body'>
					<ProfileInfoAccIFullNameAndVisibility />
					<ProfileInfoAccIAddressPhoneAndVisibility />
				</div>
			</div>
		</div>
	);
}

export default ProfileInfoAccordionItem;
