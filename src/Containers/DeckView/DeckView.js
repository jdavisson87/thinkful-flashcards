import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { readDeck, deleteDeck } from '../../utils/api/index';
import CardList from '../CardList/CardList';

const DeckView = () => {
  const { deckId } = useParams();
  const history = useHistory();

  const [deck, setDeck] = useState({});
  const { name, description } = deck;

  useEffect(() => {
    async function getDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
    }
    getDeck();
  }, [deckId]);

  const deckDeleteHandler = async (id) => {
    if (window.confirm('Delete this deck?')) {
      deleteDeck(id);
      history.push('/');
    }
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" key="home-link">
            <Link to={'/'}>
              <i className="bi bi-house-door-fill" />
              {` `}Home
            </Link>
          </li>
          <li
            className="breadcrumb-item active"
            aria-current="page"
            key="create-deck-link"
          >
            {name}
          </li>
        </ol>
      </nav>
      <div className="d-flex flex-column">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="flex-row button-ctr">
          <div className="float-left">
            <Link
              to={`/decks/${deckId}/edit`}
              className="btn-lg btn-secondary mr-1 mt-1"
            >
              <i className="bi bi-eye" />
              {` `}Edit
            </Link>
            <Link
              to={`/decks/${deckId}/study`}
              className="btn-lg btn-primary m-1"
            >
              <i className="bi bi-book-half"></i>
              {` `}Study
            </Link>
            <Link
              to={`/decks/${deckId}/cards/new`}
              className="btn-lg btn-primary m-1"
            >
              <i className="bi bi-plus-lg" />
              {` `}Add Card
            </Link>
          </div>
          <div>
            <button
              className="btn-lg btn-danger float-right"
              onClick={() => deckDeleteHandler(deckId)}
            >
              <i className="bi bi-trash" />
            </button>
          </div>
        </div>
        <div>
          <h1>Cards</h1>
          <CardList cards={deck.cards} />
        </div>
      </div>
    </div>
  );
};

export default DeckView;
