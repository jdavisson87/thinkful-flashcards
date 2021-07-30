import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import { listCards } from '../../utils/api/index';

const CardList = ({ deckId }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getCards() {
      try {
        const response = await listCards(deckId);
        setCards(response);
        setLoading(false);
      } catch (error) {
        alert('Sorry, there was an error retrieving the card list');
        setLoading(false);
      }
    }
    getCards();
  }, [deckId]);

  return loading ? (
    <div>
      <p>Loading....</p>
    </div>
  ) : cards.length === 0 ? (
    <div>
      <p>There are currently no cards in this deck</p>
    </div>
  ) : (
    <ul className="list-group">
      {cards.map((card, index) => (
        <Card card={card} key={`${card.id}${card.deckId}${index}`} />
      ))}
    </ul>
  );
};

export default CardList;
