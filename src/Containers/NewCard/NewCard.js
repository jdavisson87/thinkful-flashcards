import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import CardForm from '../../Forms/CardForm';
import { createCard } from '../../utils/api/index';

const NewCard = ({ name }) => {
  const history = useHistory();
  const { deckId } = useParams();
  const defaultCard = {
    id: '',
    front: '',
    back: '',
    deckId: deckId,
  };
  const [card, setCard] = useState({ defaultCard });

  const changeHandler = ({ target }) => {
    setCard({
      ...card,
      [target.id]: target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await createCard(deckId, card);
    history.push(`/decks/${deckId}`);
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            New Card
          </li>
        </ol>
      </nav>
      <CardForm
        card={card}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
      />
    </div>
  );
};

export default NewCard;
