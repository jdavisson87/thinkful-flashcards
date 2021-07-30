import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listDecks } from '../../utils/api/index';
import DeckPreview from '../DeckPreview/DeckPreview';

const DecksList = ({ deleteDeck }) => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function getDecks() {
      try {
        const response = await listDecks();
        setDecks(response);
      } catch (error) {
        throw error;
      }
    }
    getDecks();
  }, [decks]);

  return (
    <div>
      <Link to={`/decks/new`} className="btn btn-secondary">
        <i className="bi bi-plus-lg"></i> {` `}Create Deck
      </Link>
      <ul className="list-group mt-1 p-0">
        {decks.length > 0 ? (
          decks.map((deck) => (
            <DeckPreview
              name={deck.name}
              description={deck.description}
              deckId={deck.id}
              onDelete={deleteDeck}
              key={`${deck.name}${deck.id}`}
            />
          ))
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
