import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import CardForm from '../../Forms/CardForm';
import { updateCard, readCard } from '../../utils/api/index';

const EditCard = ({ deck = {} }) => {
  const history = useHistory();
  const { cardId } = useParams();

  const [card, setCard] = useState({});

  useEffect(() => {
    async function getCard() {
      try {
        const response = await readCard(cardId);
        setCard(response);
      } catch (error) {
        throw error;
      }
    }
    getCard();
  }, [cardId]);

  const submitHandler = async (event) => {
    event.preventDefault();
    updateCard(card);
    history.push(`/decks/${deck.id}`);
  };

  const changeHandler = ({ target }) => {
    setCard({
      ...card,
      [target.id]: target.value,
    });
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Card
          </li>
        </ol>
      </nav>
      <div>
        <h1>Edit Card</h1>
        <CardForm
          card={card}
          submitHandler={submitHandler}
          changeHandler={changeHandler}
        />
      </div>
    </div>
  );
};

export default EditCard;
