import React from "react";
import { Translation } from "react-i18next";

function Register() {
	return (
		<div>
			<div className='position-absolute top-50 start-50 translate-middle'>
				{/* Registration information */}
				{/* Title */}
				<div className='text-center'>
					<Translation>
						{(t) => (
							<h1 className='h3 mb-4 fw-normal'>
								{t("page_register.registration_info")}
							</h1>
						)}
					</Translation>
				</div>
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
								{t("page_register.username")}
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
							<label htmlFor='floatingInput'>{t("page_register.email")}</label>
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
								{t("page_login.password")}
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
								{t("page_register.confirm_password")}
							</label>
						)}
					</Translation>
				</div>
				<div className='mt-3'>
					{/* Profile information */}
					{/* Title */}
					<div className='text-center'>
						<Translation>
							{(t) => (
								<h1 className='h3 mb-4 fw-normal'>
									{t("page_register.profile_info")}
								</h1>
							)}
						</Translation>
					</div>
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
							<div class='form-check form-check-inline'>
								<input
									class='form-check-input'
									type='radio'
									name='inlineRadioOptions'
									id='inlineRadio1'
									value='option1'
								/>
								<label class='form-check-label' for='inlineRadio1'>
									1
								</label>
							</div>
							<div class='form-check form-check-inline'>
								<input
									class='form-check-input'
									type='radio'
									name='inlineRadioOptions'
									id='inlineRadio2'
									value='option2'
								/>
								<label class='form-check-label' for='inlineRadio2'>
									2
								</label>
							</div>
							<div class='form-check form-check-inline'>
								<input
									class='form-check-input'
									type='radio'
									name='inlineRadioOptions'
									id='inlineRadio3'
									value='option3'
								/>
								<label class='form-check-label' for='inlineRadio3'>
									3
								</label>
							</div>
						</div>
					</div>
					{/* Location */}
					{/* Phone number */}
					{/* Phone number visibility */}
				</div>
				{/* General preferences */}
			</div>
		</div>
	);
}

export default Register;
