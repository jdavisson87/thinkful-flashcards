import React from 'react';
import { Link } from 'react-router-dom';

const DeckPreview = ({
  name,
  description,
  deckId,
  onDelete,
  deckLength = 0,
}) => {
  const cardNumber = `${deckLength} ${deckLength === 1 ? 'card' : 'cards'}`;
  return (
    <li className="card list-group-item" key={deckId}>
      <div className="card-body">
        <div className="d-flex flex-row justify-content-between">
          <h4 className="card-title">{name}</h4>
          <h6 className="card-subtitle text-muted">{cardNumber}</h6>
        </div>
        <p className="card-text">{description}</p>
        <div className="float-left">
          <Link to={`/decks/${deckId}`} className="btn-lg btn-secondary m-1">
            <i className="bi bi-eye" />
            {` `}View
          </Link>
          <Link
            to={`/decks/${deckId}/study`}
            className="btn-lg btn-primary m-1"
          >
            <i className="bi bi-book-half"></i>
            {` `}Study
          </Link>
        </div>
        <button
          onClick={() => onDelete(deckId)}
          className="btn-lg btn-danger float-right"
        >
          <i className="bi bi-trash" />
        </button>
      </div>
    </li>
  );
};

export default DeckPreview;
