import './Card.css'
import React from 'react'

const Card = (props) => {


	
	const cardStyle = {
		backgroundColor:props.color || '#F00',
		borderColor:props.color || '#F00',
		
	}


	return (<div className="Card" style={cardStyle}>
				<h2><div className="Title">{props.titulo}</div></h2>
				<div className="Content">{props.children}</div>
			</div>);
};
export default Card;