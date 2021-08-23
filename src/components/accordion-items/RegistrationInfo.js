import React from "react";
import { Translation } from "react-i18next";

function RegistrationInfoAccordionItem() {
	return (
		<div className='accordion-item'>
			<h2 className='accordion-header' id='headingOne'>
				<Translation>
					{(t) => (
						<button
							className='accordion-button'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseOne'
							aria-expanded='true'
							aria-controls='collapseOne'>
							{t("modal_register.registration_info")}
						</button>
					)}
				</Translation>
			</h2>
			<div
				id='collapseOne'
				className='accordion-collapse collapse show'
				aria-labelledby='headingOne'
				data-bs-parent='#accordionExample'>
				<div className='accordion-body'>
					{/* Username */}
					<div className='form-floating'>
						<input
							type='username'
							className='form-control'
							id='floatingInput'
							placeholder='username'
						/>
						<Translation>
							{(t) => (
								<label htmlFor='floatingInput'>
									{t("modal_register.username")}
								</label>
							)}
						</Translation>
					</div>
					{/* Email */}
					<div className='form-floating'>
						<input
							type='email'
							className='form-control'
							id='floatingInput'
							placeholder='user@email.com'
						/>
						<Translation>
							{(t) => (
								<label htmlFor='floatingInput'>
									{t("modal_register.email")}
								</label>
							)}
						</Translation>
					</div>
					{/* Password */}
					<div className='form-floating'>
						<input
							type='password'
							className='form-control'
							id='floatingPassword'
							placeholder='password'
						/>
						<Translation>
							{(t) => (
								<label htmlFor='floatingPassword'>
									{t("modal_login.password")}
								</label>
							)}
						</Translation>
					</div>
					{/* Confirm password */}
					<div className='form-floating'>
						<input
							type='password'
							className='form-control'
							id='floatingPassword'
							placeholder='password'
						/>
						<Translation>
							{(t) => (
								<label htmlFor='floatingInput'>
									{t("modal_register.confirm_password")}
								</label>
							)}
						</Translation>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RegistrationInfoAccordionItem;
