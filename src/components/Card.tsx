import React from 'react';

interface CardProps {
  id: number;
  name: string;
  email: string;
}

const Card: React.SFC<CardProps> = ({ id, name, email }) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robot' src={`https://robohash.org/${id}?test?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
