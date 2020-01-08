import React from 'react';

/*
class Card extends React.Component (props) {
	render() {
		return (
			<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img alt='robot' src='https://robohash.org/test?200x200' />
				<div>
					<h2>{props.name}</h2>
					<p>{props.email}</p>
				</div>
			</div>
		);
	}
}
*/

const Card = ({ id, name, email }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robot' src={`https://robohash.org/${id}?test?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}


export default Card;