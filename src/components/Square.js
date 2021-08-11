import React from "react";
import { Translation } from "react-i18next";

const squareColor = "#235679";

function Square(props) {
	return (
		<div
			className='flex-column mx-3 align-items-center justify-content-evenly'
			style={{
				display: "flex",
				width: 200,
				height: 200,
				backgroundColor: squareColor,
				boxShadow: "1px 1px 10px 10px rgba(0, 0, 0, 0.2)",
			}}>
			<h1 className='text-white'>{props.number}</h1>
			<Translation>
				{(t) => <h3 className='text-white'>{t("props.title")}</h3>}
			</Translation>
		</div>
	);
}

export default Square;
