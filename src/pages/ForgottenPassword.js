import React from "react";
import { Translation } from "react-i18next";

function ForgottenPassword() {
	return (
		<div className='position-absolute top-50 start-50 translate-middle'>
			{/* Title */}
			<div className='text-center'>
				<Translation>
					{(t) => (
						<h1 className='h3 mb-4 fw-normal'>
							{t("page_forgotten_password.title")}
						</h1>
					)}
				</Translation>
			</div>
			{/* Email input */}
			<Translation>
				{(t) => <p>{t("page_forgotten_password.message")}</p>}
			</Translation>
			<div className='form-floating mb-3'>
				<input	
					type='email'
					className='form-control'
					id='floatingInput'
					placeholder='name@example.com'
				/>
				<Translation>
					{(t) => (
						<label htmlFor='floatingInput'>
							{t("page_forgotten_password.email")}
						</label>
					)}
				</Translation>
			</div>
			{/* Recover password button */}
			<Translation>
				{(t) => (
					<button className='w-100 btn btn-lg btn-primary' type='submit'>
						{t("page_forgotten_password.request_password")}
					</button>
				)}
			</Translation>
		</div>
	);
}

export default ForgottenPassword;
