import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Deck from '../../Components/Deck/Deck';

const Decks = () => {
  return (
    <div>
      <p>Deck Screen </p>

      <Link to={`/decks/new`} className="btn btn-secondary">
        + Create Deck
      </Link>
      <div className="mt-1">
        <Deck />
      </div>
    </div>
  );
};

export default Decks;
