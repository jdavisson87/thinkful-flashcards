import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const CardForm = ({ card, submitHandler, changeHandler }) => {
  const history = useHistory();
  const { deckId } = useParams();

  return (
    <div>
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
          onClick={() => history.push(`/decks/${deckId}`)}
          className="btn-lg btn-secondary m-1"
        >
          {card.id ? 'Cancel' : 'Done'}
        </button>
        <button type="submit" className="btn-lg btn-primary m-1">
          {card.id ? 'Submit' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default CardForm;
