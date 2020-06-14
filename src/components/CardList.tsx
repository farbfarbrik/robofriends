import React from 'react';
import Card from './Card';
import { Robot } from '../robot-model';

interface CardListProps {
  robots: Robot[];
}

const CardList: React.SFC<CardListProps> = ({ robots }) => {
  const cardsArray = robots.map((user: any, i: number) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div>{cardsArray}</div>;
};

export default CardList;
