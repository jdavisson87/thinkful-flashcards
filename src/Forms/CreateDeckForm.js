import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createDeck } from '../utils/api/index';

const CreateDeckForm = ({ submitHandler }) => {
  const formDefault = {
    name: '',
    description: '',
  };

  const [newDeck, setNewDeck] = useState(formDefault);

  const history = useHistory();
  const cancelClick = () => {
    history.push('/');
  };

  const onChange = (event) => {
    setNewDeck({
      ...newDeck,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <form onSubmit={(event) => submitHandler(event, newDeck)}>
      <h1>Create Deck</h1>
      <div className="form-group">
        <label htmlFor="deck-form-name">Name</label>
        <input
          id="name"
          type="text"
          className="form-control"
          placeholder="Deck Name"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="deck-form-description">Description</label>
        <textarea
          id="description"
          type="text"
          className="form-control"
          placeholder="Brief description of the deck"
          rows="5"
          onChange={onChange}
        />
      </div>
      <div>
        <button
          onClick={() => cancelClick()}
          className="btn btn-secondary mr-2"
        >
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
