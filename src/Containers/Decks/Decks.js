import React from 'react';
import { Link } from 'react-router-dom';
import DeckPreview from '../../Components/DeckPreview/DeckPreview';

const Decks = ({ decks, deckDelete }) => {
  let content =
    decks.length > 0 ? (
      decks.map((deck) => (
        <DeckPreview
          name={deck.name}
          description={deck.description}
          deckId={deck.id}
          onDelete={deckDelete}
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
