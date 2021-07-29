import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { readDeck } from '../../utils/api/index';
import Card from '../../Components/Card/Card';

const Deck = ({ deckDelete }) => {
  const { deckId } = useParams();
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState({});

  useEffect(() => {
    async function getCards() {
      const response = await readDeck(deckId);
      setDeck(response);
      setCards(response.cards);
    }
    getCards();
  }, [deckId]);

  const content = cards.map((card) => <Card card={card} />);

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
            {deck.name}
          </li>
        </ol>
      </nav>
      <div className="d-flex flex-column">
        <h3>{deck.name}</h3>
        <p>{deck.description}</p>
        <div className="flex-row button-ctr">
          <div className="float-left">
            <Link
              to={`/decks/${deckId}`}
              className="btn-lg btn-secondary mr-1 mt-1"
            >
              <i className="bi bi-eye" />
              {` `}Edit
            </Link>
            <Link className="btn-lg btn-primary m-1">
              <i className="bi bi-book-half"></i>
              {` `}Study
            </Link>
            <Link className="btn-lg btn-primary m-1">
              <i className="bi bi-plus-lg" />
              {` `}Add Card
            </Link>
          </div>
          <div>
            <button
              onClick={deckDelete}
              className="btn-lg btn-danger float-right"
            >
              <i className="bi bi-trash" />
            </button>
          </div>
        </div>
        <div>
          <h1>Cards</h1>
          <ul className="list-group">{content}</ul>
        </div>
      </div>
    </div>
  );
};

export default Deck;
