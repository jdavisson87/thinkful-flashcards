import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import { listCards, deleteCard } from '../../utils/api/index';

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

  const deleteCardHandler = async (cardId) => {
    if (window.confirm('Do you want to delete this card?')) {
      await deleteCard(cardId);
      setCards(() => cards.filter((card) => card.id !== cardId));
    }
  };

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
        <Card
          card={card}
          deleteHandler={deleteCardHandler}
          key={`${card.id}${card.deckId}${index}`}
        />
      ))}
    </ul>
  );
};

export default CardList;
