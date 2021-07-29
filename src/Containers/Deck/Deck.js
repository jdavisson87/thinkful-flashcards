import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { readDeck } from '../../utils/api/index';

const Deck = () => {
  const { deckId } = useParams();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getCards() {
      const { cards } = await readDeck(deckId);
      console.log(cards);
    }
    getCards();
  }, []);

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
            This will be the deck title
          </li>
        </ol>
      </nav>
      <p>Deck Page</p>
    </div>
  );
};

export default Deck;
