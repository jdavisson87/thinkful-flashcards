import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listCards } from '../../utils/api/index';

const DeckPreview = ({ name, description, deckId, onDelete }) => {
  // will need to receive props for deck size, description, title and deck id
  // pass delete handler to the delete button
  // Link study to the study url and view to the view url
  const [numberOfCards, setNumberOfCards] = useState(0);
  useEffect(() => {
    async function cards() {
      const cards = await listCards(deckId);
      setNumberOfCards(cards.length);
    }
    cards();
  }, [deckId]);
  return (
    <li className="card" key={deckId}>
      <div className="card-body">
        <div className="d-flex flex-row justify-content-between">
          <h4 className="card-title">{name}</h4>
          <h6 className="card-subtitle text-muted">
            {numberOfCards} {numberOfCards === 1 ? 'card' : 'cards'}
          </h6>
        </div>
        <p className="card-text">{description}</p>
        <div className="float-left">
          <Link className="btn-lg btn-secondary m-1">
            <i className="bi bi-eye" />
            {` `}View
          </Link>
          <Link className="btn-lg btn-primary m-1">
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
