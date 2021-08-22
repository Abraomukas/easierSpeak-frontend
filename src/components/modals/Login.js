import React from "react";
import {Link} from "react-router-dom";

function Login() {
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
						<button
							type='button'
							className='btn btn-primary mx-1'
							style={{ width: "50%" }}>
							LOGIN
						</button>
						<button
							type='button'
							className='btn btn-primary mx-1'
							style={{ width: "50%" }}>
							REGISTER
						</button>
					</div>
					<div className='modal-body'>...</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-mdb-dismiss='modal'>
							Close
						</button>
						<button type='button' className='btn btn-primary'>
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
