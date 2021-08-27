import React from "react";
import { useState } from "react";
import { Translation } from "react-i18next";
import { Link } from "react-router-dom";

const forgottenPwdStyle = {
	padding: "1rem",
	margin: "1rem",
	display: "flex",
	border: "0.1rem #c0c0c0 solid",
};

function Login() {
	const [forgottenPwd, setForgottenPwd] = useState(false);

	return (
		<div>
			{/* Social media OAuth */}
			{/* Email input */}
			<div className='form-floating my-1'>
				<input
					type='email'
					className='form-control'
					id='floatingInput'
					placeholder='name@example.com'
				/>
				<Translation>
					{(t) => (
						<label htmlFor='floatingInput'>{t("modal_login.email")}</label>
					)}
				</Translation>
			</div>
			{/* Password input */}
			<div className='form-floating my-1'>
				<input
					type='password'
					className='form-control'
					id='floatingPassword'
					placeholder='Password'
				/>
				<Translation>
					{(t) => (
						<label htmlFor='floatingPassword'>
							{t("modal_login.password")}
						</label>
					)}
				</Translation>
			</div>
			{/* Remember me */}
			<div className='d-flex justify-content-center'>
				<div className='checkbox my-3'>
					<Translation>
						{(t) => (
							<label>
								<input type='checkbox' value='remember-me' />{" "}
								{t("modal_login.remember_me")}
							</label>
						)}
					</Translation>
				</div>
			</div>
			{/* Sign in button */}
			<Translation>
				{(t) => (
					<button
						className='w-100 btn btn-lg btn-primary'
						type='submit'
						style={{ backgroundColor: "#235679" }}>
						{t("modal_login.sign_in")}
					</button>
				)}
			</Translation>
			{/* Forgot password link */}
			<div className='d-flex justify-content-center'>
				<div className='my-3'>
					<Translation>
						{(t) => (
							<Link
								className='text-decoration-none'
								to='/forgotten-password'
								onClick={() => {
									setForgottenPwd(true);
								}}>
								{t("modal_login.forgotten_password")}
							</Link>
						)}
					</Translation>
				</div>
			</div>
			{/* Forgot password section */}
			{forgottenPwd && <div style={forgottenPwdStyle}>WOLOLO</div>}
		</div>
	);
}

export default Login;
