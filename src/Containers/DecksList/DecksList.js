import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { listDecks, deleteDeck } from '../../utils/api/index';
import DeckPreview from '../../Components/DeckPreview/DeckPreview';

const DecksList = () => {
  const [decks, setDecks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function getDecks() {
      try {
        const response = await listDecks();
        setDecks(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw error;
      }
    }
    getDecks();
  }, []);

  const deckDeleteHandler = async (id) => {
    if (window.confirm('Delete this deck?')) {
      await deleteDeck(id);
      setDecks((curr) => curr.filter((deck) => deck.id !== id));
      history.push('/');
    }
  };
  return (
    <div>
      <Link to={`/decks/new`} className="btn btn-secondary">
        <i className="bi bi-plus-lg"></i> {` `}Create Deck
      </Link>
      {isLoading ? (
        <div>
          <p>Loading....</p>
        </div>
      ) : (
        <ul className="list-group mt-1 p-0">
          {decks.length > 0 ? (
            decks
              .map((deck) => (
                <DeckPreview
                  name={deck.name}
                  description={deck.description}
                  deckId={deck.id}
                  onDelete={deckDeleteHandler}
                  deckLength={deck.cards.length}
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
      )}
    </div>
  );
};

export default DecksList;
