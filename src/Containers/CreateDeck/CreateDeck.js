import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CreateDeckForm from '../../Forms/CreateDeckForm';
import { createDeck } from '../../utils/api/index';

const CreateDeck = () => {
  const history = useHistory();
  const defaultCard = {
    name: '',
    description: '',
  };

  const [newDeck, setNewDeck] = useState({ ...defaultCard });

  const changeHandler = ({ target }) => {
    setNewDeck({
      ...newDeck,
      [target.id]: target.value,
    });
  };

  async function submitHandler(event) {
    event.preventDefault();
    if (newDeck.name.trim() === '' || newDeck.description.trim() === '') {
      alert('Please enter a valid name and description for your deck');
      return null;
    }
    try {
      const response = await createDeck(newDeck);
      history.push(`/decks/${response.id}`);
    } catch (error) {
      alert(
        'Sorry, something went wrong when we tried to create a new deck.  Please try again'
      );
      history.push('/');
    }
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" key="home-link">
            <Link to={'/'}>
              <i className="bi bi-house-door-fill" />
              {` `}Home
            </Link>
          </li>
          <li
            className="breadcrumb-item active"
            aria-current="page"
            key="create-deck-link"
          >
            Create Deck
          </li>
        </ol>
      </nav>
      <div>
        <h1>Create Deck</h1>
        <CreateDeckForm
          submitHandler={submitHandler}
          changeHandler={changeHandler}
          deck={newDeck}
        />
      </div>
    </div>
  );
};

export default CreateDeck;
