import React from 'react';
import { useHistory } from 'react-router-dom';

const CardForm = ({ card, submitHandler, changeHandler }) => {
  const history = useHistory();

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
