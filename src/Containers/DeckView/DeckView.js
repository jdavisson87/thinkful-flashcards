import React from 'react';
import { Link } from 'react-router-dom';
import CardList from '../CardList/CardList';

const DeckView = ({ deckId, name, description, deleteDeck }) => {
  return (
    <div>
      <div className="d-flex flex-column">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="flex-row button-ctr">
          <div className="float-left">
            <Link
              to={`/decks/${deckId}`}
              className="btn-lg btn-secondary mr-1 mt-1"
            >
              <i className="bi bi-eye" />
              {` `}Edit
            </Link>
            <Link className="btn-lg btn-primary m-1">
              <i className="bi bi-book-half"></i>
              {` `}Study
            </Link>
            <Link className="btn-lg btn-primary m-1">
              <i className="bi bi-plus-lg" />
              {` `}Add Card
            </Link>
          </div>
          <div>
            <button
              className="btn-lg btn-danger float-right"
              onClick={() => deleteDeck(deckId)}
            >
              <i className="bi bi-trash" />
            </button>
          </div>
        </div>
        <div>
          <h1>Cards</h1>
          <CardList deckId={deckId} />
        </div>
      </div>
    </div>
  );
};

export default DeckView;
