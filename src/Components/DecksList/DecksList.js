import React from 'react';
import { Link } from 'react-router-dom';
import DeckPreview from '../DeckPreview/DeckPreview';

const DecksList = ({ decks, deleteDeck }) => {
  return (
    <div>
      <Link to={`/decks/new`} className="btn btn-secondary">
        <i className="bi bi-plus-lg"></i> {` `}Create Deck
      </Link>
      <ul className="list-group mt-1 p-0">
        {decks.length > 0 ? (
          decks
            .map((deck) => (
              <DeckPreview
                name={deck.name}
                description={deck.description}
                deckId={deck.id}
                onDelete={deleteDeck}
                key={`${deck.name}${deck.id}`}
              />
            ))
            .sort((a, b) => a.id - b.id)
        ) : (
          <li className="card">
            There are currently no decks available. How about we create one?
          </li>
        )}
      </ul>
    </div>
  );
};

export default DecksList;
