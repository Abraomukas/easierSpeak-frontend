import React from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";

function Register() {
	return (
		<div className='position-absolute top-50 start-50 translate-middle'>
			{/* Title */}
			<div className='text-center'>
				<Translation>
					{(t) => (
						<h1 className='h3 mb-4 fw-normal'>{t("page_register.title")}</h1>
					)}
				</Translation>
			</div>
			<div className='accordion' id='accordionExample'>
				{/* Registration information */}
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
									{t("page_register.registration_info")}
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
										<label htmlFor='floatingInput'>
											{t("page_register.email")}
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
						</div>
					</div>
				</div>
				{/* Profile information */}
				<div className='accordion-item'>
					<h2 className='accordion-header' id='headingTwo'>
						<Translation>
							{(t) => (
								<button
									className='accordion-button'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseTwo'
									aria-expanded='false'
									aria-controls='collapseTwo'>
									{t("page_register.profile_info")}
								</button>
							)}
						</Translation>
					</h2>
					<div
						id='collapseTwo'
						className='accordion-collapse collapse'
						aria-labelledby='headingTwo'
						data-bs-parent='#accordionExample'>
						<div className='accordion-body'>
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
													{t("page_register.name_visibility.public")}
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
													{t("page_register.name_visibility.members")}
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
													{t("page_register.name_visibility.officers")}
												</label>
											)}
										</Translation>
									</div>
								</div>
							</div>
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
										<label htmlFor='floatingInput'>
											{t("page_register.location")}
										</label>
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
										<label htmlFor='floatingInput'>
											{t("page_register.phone")}
										</label>
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
					</div>
				</div>
				{/* General settings */}
				<div className='accordion-item'>
					<h2 className='accordion-header' id='headingThree'>
						<Translation>
							{(t) => (
								<button
									className='accordion-button'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseThree'
									aria-expanded='false'
									aria-controls='collapseThree'>
									{t("page_register.general_settings")}
								</button>
							)}
						</Translation>
					</h2>
					<div
						id='collapseThree'
						className='accordion-collapse collapse'
						aria-labelledby='headingThree'
						data-bs-parent='#accordionExample'>
						<div className='accordion-body'>
							{/* Default language */}
							<div className='mt-3'>
								<Translation>
									{(t) => (
										<label htmlFor='floatingInput'>
											{t("page_register.language")}
										</label>
									)}
								</Translation>
								<div className='mt-3'>
									<div className='dropdown'>
										<button
											className='btn btn-secondary dropdown-toggle'
											type='button'
											id='dropdownMenuButton1'
											data-bs-toggle='dropdown'
											aria-expanded='false'></button>
										<ul
											className='dropdown-menu'
											aria-labelledby='dropdownMenuButton1'>
											<li>
												<Link className='dropdown-item' to='#'>
													English
												</Link>
											</li>
											<li>
												<Link className='dropdown-item' to='#'>
													Español
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
