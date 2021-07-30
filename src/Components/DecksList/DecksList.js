import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { listDecks, deleteDeck } from '../../utils/api/index';
import DeckPreview from '../DeckPreview/DeckPreview';

const DecksList = () => {
  const [decks, setDecks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getDecks() {
      const response = await listDecks();
      setDecks(response);
    }
    getDecks();
  }, []);

  const deckDeleteHandler = (id) => {
    if (window.confirm('Delete this deck?')) {
      deleteDeck(id);
      setDecks((current) => current.filter((deck) => deck.id !== id));
      history.push('/');
    }
  };

  return (
    <div>
      <Link to={`/decks/new`} className="btn btn-secondary">
        <i className="bi bi-plus-lg"></i> {` `}Create Deck
      </Link>
      <ul className="mt-1 p-0">
        {decks.length > 0 ? (
          decks.map((deck) => (
            <DeckPreview
              name={deck.name}
              description={deck.description}
              deckId={deck.id}
              onDelete={deckDeleteHandler}
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
