import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { updateDeck } from '../../utils/api/index';
import CreateDeckForm from '../../Forms/CreateDeckForm';

const EditDeck = ({ currentDeck, setCurrentDeck, decks, setDecks }) => {
  const history = useHistory();

  const submitHandler = (event, updatedDeck) => {
    event.preventDefault();
    updateDeck(updatedDeck);
    setDecks(() => {
      const updatedList = decks.filter((deck) => deck.id !== updatedDeck.id);
      return [...updatedList, updatedDeck];
    });
    setCurrentDeck(updatedDeck);
    history.push(`/decks/${updatedDeck.id}`);
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${currentDeck.id}`}>{currentDeck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <div>
        <h1>Edit Deck</h1>
        <CreateDeckForm deck={currentDeck} submitHandler={submitHandler} />
      </div>
    </div>
  );
};

export default EditDeck;
