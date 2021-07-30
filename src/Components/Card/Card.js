import React from 'react';

const Card = ({ card }) => {
  const { front, back, deckId, id } = card;
  return (
    <li className="list-group-item" key={`${id}${deckId}`}>
      <div className="card">
        <div className="d-flex flex-row p-2 card-body">
          <p className="mr-2 card-text col-6"> {front}</p>
          <p className="ml-2 col-6 card-text">{back} </p>
        </div>
        <div>
          <button className="btn btn-danger float-right m-1">
            <i className="bi bi-trash" />
          </button>
          <button className="btn btn-secondary float-right m-1">
            <i className="bi bi-pencil-fill" />
            {` `}Edit
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
