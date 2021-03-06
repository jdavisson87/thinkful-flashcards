import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card, deleteHandler }) => {
  const { front, back, deckId, id } = card;
  const linkPath =
    deckId && id
      ? `/decks/${deckId}/cards/${id}/edit`
      : deckId
      ? `/decks/${deckId}`
      : '/';

  return (
    <li className="list-group-item" key={`${id}${deckId}`}>
      <div className="card">
        <div className="d-flex flex-row p-2 card-body">
          <p className="mr-2 card-text col-6"> {front}</p>
          <p className="ml-2 col-6 card-text">{back} </p>
        </div>
        <div>
          <button
            onClick={() => deleteHandler(id)}
            className="btn btn-danger float-right m-1"
          >
            <i className="bi bi-trash" />
          </button>
          <Link to={linkPath} className="btn btn-secondary float-right m-1">
            <i className="bi bi-pencil-fill" />
            {` `}Edit
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Card;
