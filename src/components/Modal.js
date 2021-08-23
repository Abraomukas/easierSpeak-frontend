import React from "react";
import { useState } from "react";
import { Translation } from "react-i18next";

/*
 * Components
 */
import Login from "./modals/Login";
import Register from "./modals/Register";

const inactiveSectionBtnStyle = {
	opacity: 0.5,
	backgroundColor: "#8d323f",
	width: "50%",
};
const activeSectionBtnStyle = { backgroundColor: "#235679", width: "50%" };

function Modal() {
	const [active, setActive] = useState(true);
	const [login, setLogin] = useState(true);

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
										setLogin(true);
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
										setLogin(false);
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
					<div className='modal-body'>{login ? <Login /> : <Register />}</div>
					<div className='modal-footer'>
						<Translation>
							{(t) => (
								<button
									type='button'
									className='btn btn-secondary'
									data-mdb-dismiss='modal'
									style={{ backgroundColor: "#8d323f" }}>
									{t("modal_close")}
								</button>
							)}
						</Translation>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
