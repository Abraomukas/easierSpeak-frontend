import React from "react";
import { Translation } from "react-i18next";

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
							{t("page_register.profile_info")}
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
					{/* First name */}
					<div className='form-floating'>
						<input
							type='firstName'
							className='form-control'
							id='floatingInput'
							placeholder='first name'
						/>
						<Translation>
							{(t) => (
								<label htmlFor='floatingInput'>
									{t("page_register.first_name")}
								</label>
							)}
						</Translation>
					</div>
					{/* Last name */}
					<div className='form-floating'>
						<input
							type='lastName'
							className='form-control'
							id='floatingInput'
							placeholder='last name'
						/>
						<Translation>
							{(t) => (
								<label htmlFor='floatingInput'>
									{t("page_register.last_name")}
								</label>
							)}
						</Translation>
					</div>
					{/* Name visibility */}
					<div className='mt-3'>
						<Translation>
							{(t) => (
								<label htmlFor='floatingInput'>
									{t("page_register.name_visibility.title")}
								</label>
							)}
						</Translation>
						<div className='mt-3'>
							<div className='form-check form-check-inline'>
								<input
									className='form-check-input'
									type='radio'
									name='inlineRadioOptions'
									id='inlineRadio1'
									value='option1'
								/>
								<Translation>
									{(t) => (
										<label htmlFor='floatingInput'>
											{t("page_register.name_visibility.public")}
										</label>
									)}
								</Translation>
							</div>
							<div className='form-check form-check-inline'>
								<input
									className='form-check-input'
									type='radio'
									name='inlineRadioOptions'
									id='inlineRadio2'
									value='option2'
								/>
								<Translation>
									{(t) => (
										<label htmlFor='floatingInput'>
											{t("page_register.name_visibility.members")}
										</label>
									)}
								</Translation>
							</div>
							<div className='form-check form-check-inline'>
								<input
									className='form-check-input'
									type='radio'
									name='inlineRadioOptions'
									id='inlineRadio3'
									value='option3'
								/>
								<Translation>
									{(t) => (
										<label htmlFor='floatingInput'>
											{t("page_register.name_visibility.officers")}
										</label>
									)}
								</Translation>
							</div>
						</div>
					</div>
					{/* Location */}
					<div className='mt-3 form-floating'>
						<input
							type='location'
							className='form-control'
							id='floatingInput'
							placeholder='location'
						/>
						<Translation>
							{(t) => (
								<label htmlFor='floatingInput'>
									{t("page_register.location")}
								</label>
							)}
						</Translation>
					</div>
					{/* Phone number */}
					<div className='form-floating'>
						<input
							type='phoneNumber'
							className='form-control'
							id='floatingInput'
							placeholder='+1 23456789'
						/>
						<Translation>
							{(t) => (
								<label htmlFor='floatingInput'>
									{t("page_register.phone")}
								</label>
							)}
						</Translation>
					</div>
					{/* Phone number visibility */}
					<div className='mt-3'>
						<Translation>
							{(t) => (
								<label htmlFor='floatingInput'>
									{t("page_register.phone_visibility.title")}
								</label>
							)}
						</Translation>
						<div className='mt-3'>
							<div className='form-check form-check-inline'>
								<input
									className='form-check-input'
									type='radio'
									name='inlineRadioOptions'
									id='inlineRadio1'
									value='option1'
								/>
								<Translation>
									{(t) => (
										<label htmlFor='floatingInput'>
											{t("page_register.phone_visibility.public")}
										</label>
									)}
								</Translation>
							</div>
							<div className='form-check form-check-inline'>
								<input
									className='form-check-input'
									type='radio'
									name='inlineRadioOptions'
									id='inlineRadio2'
									value='option2'
								/>
								<Translation>
									{(t) => (
										<label htmlFor='floatingInput'>
											{t("page_register.phone_visibility.members")}
										</label>
									)}
								</Translation>
							</div>
							<div className='form-check form-check-inline'>
								<input
									className='form-check-input'
									type='radio'
									name='inlineRadioOptions'
									id='inlineRadio3'
									value='option3'
								/>
								<Translation>
									{(t) => (
										<label htmlFor='floatingInput'>
											{t("page_register.phone_visibility.officers")}
										</label>
									)}
								</Translation>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileInfoAccordionItem;
