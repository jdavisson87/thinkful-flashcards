import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeckPreview from '../../Components/DeckPreview/DeckPreview';
import { listDecks } from '../../utils/api/index';

const Decks = () => {
  const [decks, setDecks] = useState([]);
  // needs to get deck information
  useEffect(() => {
    async function getDecks() {
      const response = await listDecks();
      setDecks(response);
    }
    getDecks();
  }, []);
  // if no decks, show message stating "There are no decks, how about creating one?"
  // create variable that maps the decks and outputs the Deck component, passing in the necessary props
  // need a delete handler for all deck components
  let content =
    decks.length > 0 ? (
      decks.map((deck) => (
        <DeckPreview
          name={deck.name}
          description={deck.description}
          deckId={deck.id}
          key={`${deck.name}${deck.id}`}
        />
      ))
    ) : (
      <p>There are currently no decks available. How about we create one?</p>
    );
  return (
    <div>
      <p>Deck Screen </p>

      <Link to={`/decks/new`} className="btn btn-secondary">
        <i className="bi bi-plus-lg"></i> {` `}Create Deck
      </Link>
      <ul className="mt-1 p-0">{content}</ul>
    </div>
  );
};

export default Decks;
