import React from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";

function LoginPage() {
	return (
		<div>
			<div className='position-absolute top-50 start-50 translate-middle'>
				{/* Title */}
				<div className='text-center'>
					<h1 className='h3 mb-4 fw-normal'>Please sign in</h1>
				</div>
				{/* Email input */}
				<div className='form-floating'>
					<input
						type='email'
						class='form-control'
						id='floatingInput'
						placeholder='name@example.com'
					/>
					<label for='floatingInput'>Email address</label>
				</div>
				{/* Password input */}
				<div className='form-floating'>
					<input
						type='password'
						class='form-control'
						id='floatingPassword'
						placeholder='Password'
					/>
					<label for='floatingPassword'>Password</label>
				</div>
				{/* Remember me */}
				<div class='checkbox my-3'>
					<label>
						<input type='checkbox' value='remember-me' /> Remember me
					</label>
				</div>
				{/* Sign in button */}
				<button class='w-100 btn btn-lg btn-primary' type='submit'>
					Sign in
				</button>
				{/* Forgot password link */}
				<div className='my-3'>
					<Translation>
						{(t) => (
							<Link className='text-decoration-none' to='/forgotten-password'>
								{t("page_login.forgotten_password")}
							</Link>
						)}
					</Translation>
				</div>
				{/* Register link */}
				<div className='my-3'>
					<Translation>
						{(t) => (
							<Link className='text-decoration-none' to='/forgotten-password'>
								{t("page_login.register")}
							</Link>
						)}
					</Translation>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
