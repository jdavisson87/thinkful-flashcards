import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { readCard, updateCard } from '../utils/api/index';

const CardForm = ({ deck }) => {
  const { cardId } = useParams();
  const history = useHistory();
  const defaultCard = {
    id: cardId,
    front: '',
    back: '',
    deckId: deck.id,
  };
  const [card, setCard] = useState(defaultCard);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getCard() {
      try {
        const response = await readCard(cardId);
        setCard(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
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

  return loading ? (
    <div>Loading...</div>
  ) : (
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
            Edit Deck
          </li>
        </ol>
      </nav>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="front">Front</label>
          <textarea
            type="text"
            className="form-control"
            id="front"
            placeholder="Add the front of the card"
            onChange={changeHandler}
            value={card.front}
          />
        </div>
        <div className="form-group">
          <label htmlFor="back">Back</label>
          <textarea
            type="text"
            className="form-control"
            id="back"
            placeholder="Add the back of the card"
            onChange={changeHandler}
            value={card.back}
          />
        </div>
        <button
          onClick={() => history.goBack()}
          className="btn-lg btn-secondary"
        >
          Cancel
        </button>
        <button type="submit" className="btn-lg btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CardForm;
