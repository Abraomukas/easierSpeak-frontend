import React from "react";
import { Translation } from "react-i18next";

function ProfileInfoAccIFullNameAndVisibility() {
	return (
		<div>
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
							{t("modal_register.first_name")}
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
							{t("modal_register.last_name")}
						</label>
					)}
				</Translation>
			</div>
			{/* Name visibility */}
			<div className='mt-3'>
				<Translation>
					{(t) => (
						<label htmlFor='floatingInput'>
							{t("modal_register.name_visibility.title")}
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
									{t("modal_register.name_visibility.public")}
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
									{t("modal_register.name_visibility.members")}
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
									{t("modal_register.name_visibility.officers")}
								</label>
							)}
						</Translation>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileInfoAccIFullNameAndVisibility;
