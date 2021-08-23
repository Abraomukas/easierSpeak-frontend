import React from "react";
import { useState } from "react";
import { Translation } from "react-i18next";

const inactiveSectionBtnStyle = {
	opacity: 0.5,
	backgroundColor: "#8d323f",
	width: "50%",
};
const activeSectionBtnStyle = { backgroundColor: "#235679", width: "50%" };

function Login() {
	const [active, setActive] = useState(true);

	return (
		<div
			className='modal fade'
			id='exampleModal'
			tabIndex='-1'
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<Translation>
							{(t) => (
								<button
									onClick={() => {
										setActive(true);
									}}
									type='button'
									className='btn btn-primary mx-1'
									style={
										active ? activeSectionBtnStyle : inactiveSectionBtnStyle
									}>
									{t("login")}
								</button>
							)}
						</Translation>
						<Translation>
							{(t) => (
								<button
									onClick={() => {
										setActive(false);
									}}
									type='button'
									className='btn btn-primary mx-1'
									style={
										active ? inactiveSectionBtnStyle : activeSectionBtnStyle
									}>
									{t("modal_register.title")}
								</button>
							)}
						</Translation>
					</div>
					<div className='modal-body'>LOGIN</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-mdb-dismiss='modal'>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
