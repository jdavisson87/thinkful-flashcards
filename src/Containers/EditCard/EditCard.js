import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import CardForm from '../../Forms/CardForm';
import { updateCard, readCard, readDeck } from '../../utils/api/index';

const EditCard = () => {
  const history = useHistory();
  const { deckId, cardId } = useParams();

  const deckDefault = {
    id: deckId,
    name: '',
    description: '',
  };

  const cardDefault = {
    id: cardId,
    deckId: deckId,
    front: '',
    back: '',
  };

  const [card, setCard] = useState(cardDefault);
  const [deck, setDeck] = useState(deckDefault);

  useEffect(() => {
    async function getData() {
      try {
        const cardResponse = await readCard(cardId);
        setCard(cardResponse);
        const deckResponse = await readDeck(deckId);
        setDeck(deckResponse);
      } catch (error) {
        throw error;
      }
    }
    getData();
  }, [cardId, deckId]);

  const submitHandler = async (event) => {
    event.preventDefault();
    updateCard(card);
    history.push(`/decks/${deckId}`);
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
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
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
