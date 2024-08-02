import React from 'react';
import Card from './Card';

const CardList = () => {
  const cardData = [
    { title: 'Card title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque.' },
    { title: 'Card title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque.' },
    { title: 'Card title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque.' }
  ];

  return (
    <div className="card-deck">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} text={card.text} />
      ))}
    </div>
  );
};

export default CardList;
