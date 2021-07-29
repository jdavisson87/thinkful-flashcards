import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DeckPreview from '../../Components/DeckPreview/DeckPreview';
import { listDecks, deleteDeck } from '../../utils/api/index';

const Decks = () => {
  const [decks, setDecks] = useState([]);
  const history = useHistory();
  // needs to get deck information
  useEffect(() => {
    async function getDecks() {
      const response = await listDecks();
      setDecks(response);
    }
    getDecks();
  }, []);

  // need a delete handler for all deck components
  const deleteHandler = (id) => {
    if (window.confirm('Delete this deck?')) {
      deleteDeck(id);
      setDecks((current) => current.filter((deck) => deck.id !== id));
      history.push('/');
    }
  };

  let content =
    decks.length > 0 ? (
      decks.map((deck) => (
        <DeckPreview
          name={deck.name}
          description={deck.description}
          deckId={deck.id}
          onDelete={deleteHandler}
          key={`${deck.name}${deck.id}`}
        />
      ))
    ) : (
      <p>There are currently no decks available. How about we create one?</p>
    );
  return (
    <div>
      <Link to={`/decks/new`} className="btn btn-secondary">
        <i className="bi bi-plus-lg"></i> {` `}Create Deck
      </Link>
      <ul className="mt-1 p-0">{content}</ul>
    </div>
  );
};

export default Decks;
