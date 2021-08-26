import React from "react";
import { Translation } from "react-i18next";
import { Link } from "react-router-dom";

function Login(props) {
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
							<Link className='text-decoration-none' to='/forgotten-password'>
								{t("modal_login.forgotten_password")}
							</Link>
						)}
					</Translation>
				</div>
			</div>
			{/* Forgot password section */}
		</div>
	);
}

export default Login;
