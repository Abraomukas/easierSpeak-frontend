import React from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";

function Login() {
	return (
		<section>
			<div className='position-absolute top-50 start-50 translate-middle'>
				{/* Title */}
				<div className='text-center'>
					<Translation>
						{(t) => (
							<h1 className='h3 mb-4 fw-normal'>{t("page_login.title")}</h1>
						)}
					</Translation>
				</div>
				{/* Email input */}
				<div className='form-floating'>
					<input
						type='email'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
					/>
					<Translation>
						{(t) => (
							<label htmlFor='floatingInput'>{t("page_login.email")}</label>
						)}
					</Translation>
				</div>
				{/* Password input */}
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
				{/* Remember me */}
				<div className='checkbox my-3'>
					<Translation>
						{(t) => (
							<label>
								<input type='checkbox' value='remember-me' />{" "}
								{t("page_login.remember_me")}
							</label>
						)}
					</Translation>
				</div>
				{/* Sign in button */}
				<Translation>
					{(t) => (
						<button className='w-100 btn btn-lg btn-primary' type='submit'>
							{t("page_login.sign_in")}
						</button>
					)}
				</Translation>
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
							<Link className='text-decoration-none' to='/register'>
								{t("page_login.register")}
							</Link>
						)}
					</Translation>
				</div>
			</div>
			{/* Refactor */}
			<div className='container'>
				<div className='d-flex justify-content-center'></div>
				<form>
					<div class='mb-3'>
						<label for='exampleInputEmail1' class='form-label'>
							Email address
						</label>
						<input
							type='email'
							class='form-control'
							id='exampleInputEmail1'
							aria-describedby='emailHelp'
						/>
						<div id='emailHelp' class='form-text'>
							We'll never share your email with anyone else.
						</div>
					</div>
					<div class='mb-3'>
						<label for='exampleInputPassword1' class='form-label'>
							Password
						</label>
						<input
							type='password'
							class='form-control'
							id='exampleInputPassword1'
						/>
					</div>
					<div class='mb-3 form-check'>
						<input
							type='checkbox'
							class='form-check-input'
							id='exampleCheck1'
						/>
						<label class='form-check-label' for='exampleCheck1'>
							Check me out
						</label>
					</div>
					<button type='submit' class='btn btn-primary'>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
}

export default Login;
