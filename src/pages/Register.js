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
						placeholder='Password'
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
						placeholder='Password'
					/>
					<Translation>
						{(t) => (
							<label htmlFor='floatingInput'>
								{t("page_register.confirm_password")}
							</label>
						)}
					</Translation>
				</div>
				<div></div>
				{/* Profile information */}
				{/* General preferences */}
			</div>
		</div>
	);
}

export default Register;
