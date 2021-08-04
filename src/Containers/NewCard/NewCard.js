import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import CardForm from '../../Forms/CardForm';
import { createCard, readDeck } from '../../utils/api/index';

const NewCard = () => {
  const history = useHistory();
  const { deckId } = useParams();
  const defaultCard = {
    id: '',
    front: '',
    back: '',
    deckId: deckId,
  };
  const [card, setCard] = useState({ defaultCard });
  const [deckName, setDeckName] = useState('');

  useEffect(() => {
    async function getDeckName() {
      const deckData = await readDeck(deckId);
      setDeckName(deckData.name);
    }
    getDeckName();
  }, [deckId]);

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
            <Link to={`/decks/${deckId}`}>{deckName}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <div>
        <h1>{deckName}: Add Card</h1>
        <CardForm
          card={card}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
        />
      </div>
    </div>
  );
};

export default NewCard;
