import React from 'react';
import { Link } from 'react-router-dom';
import Deck from '../../Components/Deck/Deck';

const Decks = () => {
  // needs to get deck information
  // if no decks, show message stating "There are no decks, how about creating one?"
  // create variable that maps the decks and outputs the Deck component, passing in the necessary props
  // need a delete handler for all deck components
  let content = (
    <div>
      <Deck />
      <Deck />
    </div>
  );
  return (
    <div>
      <p>Deck Screen </p>

      <Link to={`/decks/new`} className="btn btn-secondary">
        <i class="bi bi-plus-lg"></i> Create Deck
      </Link>
      <div className="mt-1">{content}</div>
    </div>
  );
};

export default Decks;
