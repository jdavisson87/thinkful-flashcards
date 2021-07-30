import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import { listCards } from '../../utils/api/index';

const CardList = ({ deckId }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCards() {
      try {
        const response = await listCards(deckId);
        console.log(response);
        setCards(response);
        setLoading(false);
      } catch (error) {
        alert('Sorry, there was an error retrieving the card list');
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
    <div>
      {cards.map((card, index) => (
        <Card card={card} key={`${deckId}${index}`} />
      ))}
    </div>
  );
};

export default CardList;
