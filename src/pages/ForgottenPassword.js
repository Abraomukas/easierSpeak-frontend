import React from "react";
import { Translation } from "react-i18next";

function ForgottenPassword() {
	return (
		<div>
			<div className='position-absolute top-50 start-50 translate-middle'>
				<div className='text-center'>
					<Translation>
						{(t) => (
							<h1 className='h3 mb-4 fw-normal'>{t("page_login.title")}</h1>
						)}
					</Translation>
				</div>
			</div>
		</div>
	);
}

export default ForgottenPassword;
