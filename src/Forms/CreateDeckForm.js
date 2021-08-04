import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const CreateDeckForm = ({ submitHandler, changeHandler, deck }) => {
  const history = useHistory();
  const { deckId } = useParams();
  const cancelClick = () => {
    if (deckId) {
      history.push(`/decks/${deckId}`);
    } else {
      history.push('/');
    }
  };

  return (
    <form onSubmit={(event) => submitHandler(event, deck)}>
      <div className="form-group">
        <label htmlFor="deck-form-name">Name</label>
        <input
          id="name"
          type="text"
          className="form-control"
          placeholder="Deck Name"
          value={deck.name}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="deck-form-description">Description</label>
        <textarea
          id="description"
          type="text"
          className="form-control"
          placeholder="Brief description of the deck"
          value={deck.description}
          rows="5"
          onChange={changeHandler}
        />
      </div>
      <div>
        <button onClick={cancelClick} className="btn btn-secondary mr-2">
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateDeckForm;
