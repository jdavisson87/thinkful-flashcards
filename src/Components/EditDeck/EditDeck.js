import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { updateDeck } from '../../utils/api/index';

const EditDeck = ({ deck }) => {
  const { id, name, description } = deck;
  const [currentDeck, updateCurrentDeck] = useState({
    name: name,
    description: description,
    id: id,
  });
  const history = useHistory();

  const onChange = (event) => {
    updateCurrentDeck({
      ...currentDeck,
      [event.target.id]: event.target.value,
    });
  };

  const cancelClick = () => history.goBack();

  const submitHandler = (event) => {
    event.preventDefault();
    updateDeck(currentDeck);
    history.push(`/decks/${id}`);
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${id}`}>{name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <div>
        <form onSubmit={(event) => submitHandler(event)}>
          <h1>Create Deck</h1>
          <div className="form-group">
            <label htmlFor="deck-form-name">Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              value={currentDeck.name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="deck-form-description">Description</label>
            <textarea
              id="description"
              type="text"
              className="form-control"
              value={currentDeck.description}
              rows="5"
              onChange={onChange}
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
      </div>
    </div>
  );
};

export default EditDeck;
