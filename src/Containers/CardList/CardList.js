import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import { deleteCard } from '../../utils/api/index';

const CardList = ({ cards = [] }) => {
  const { deckId } = useParams();
  const history = useHistory();
  const deleteCardHandler = async (cardId) => {
    if (window.confirm('Do you want to delete this card?')) {
      await deleteCard(cardId);
      history.go(`/decks/${deckId}`);
    }
  };

  let content;
  if (cards.length === 0) {
    content = (
      <div>
        <p>There are no cards in this deck. Please add some cards</p>
      </div>
    );
  } else {
    content = cards.map((card) => (
      <Card
        card={card}
        deleteHandler={deleteCardHandler}
        key={`${card.id}${card.deckId}`}
      />
    ));
  }

  return <ul className="list-group">{content}</ul>;
};

export default CardList;
