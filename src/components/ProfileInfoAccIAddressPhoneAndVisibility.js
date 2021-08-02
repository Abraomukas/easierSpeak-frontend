import React from "react";
import { Translation } from "react-i18next";

function ProfileInfoAccIAddressPhoneAndVisibility() {
	return (
		<div>
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
						<label htmlFor='floatingInput'>{t("page_register.location")}</label>
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
						<label htmlFor='floatingInput'>{t("page_register.phone")}</label>
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
	);
}

export default ProfileInfoAccIAddressPhoneAndVisibility;
