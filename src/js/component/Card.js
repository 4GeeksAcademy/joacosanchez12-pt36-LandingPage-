import React from 'react';

const Card = ({ title, text }) => {
  return (
    <div className="card">
      <img src="http://via.placeholder.com/500x325" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  );
};

console.log(Card)

export default Card;
