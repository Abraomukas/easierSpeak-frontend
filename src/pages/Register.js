import React from "react";
import { useState } from "react";
import { Translation } from "react-i18next";

/*
 * Components
 */
import RegistrationInfoAccordionItem from "../components/RegistrationInfoAccordionItem";
import ProfileInfoAccordionItem from "../components/ProfileInfoAccordionItem";

function Register() {
	const [defaultLng, setDefaultLng] = useState("English");

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
				<RegistrationInfoAccordionItem />
				{/* Profile information */}
				<ProfileInfoAccordionItem />
				{/* General settings */}
				<div className='accordion-item'>
					<h2 className='accordion-header' id='headingThree'>
						<Translation>
							{(t) => (
								<button
									className='accordion-button collapsed'
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
											{t("page_register.language")} - {defaultLng}
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
												<Translation>
													{(t) => (
														<button
															className='dropdown-item'
															onClick={() => {
																var lng = t("page_register.languages.gb");
																setDefaultLng(lng);
															}}
															type='button'>
															{t("page_register.languages.gb")}
														</button>
													)}
												</Translation>
											</li>
											<li>
												<Translation>
													{(t) => (
														<button
															className='dropdown-item'
															onClick={() => {
																var lng = t("page_register.languages.es");
																setDefaultLng(lng);
															}}
															type='button'>
															{t("page_register.languages.es")}
														</button>
													)}
												</Translation>
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
