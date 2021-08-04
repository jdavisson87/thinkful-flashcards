import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { updateDeck, readDeck } from '../../utils/api/index';
import CreateDeckForm from '../../Forms/CreateDeckForm';

const EditDeck = () => {
  const history = useHistory();
  const { deckId } = useParams();
  const [currentDeck, setCurrentDeck] = useState({});

  useEffect(() => {
    async function getDeck() {
      try {
        const response = await readDeck(deckId);
        await setCurrentDeck(response);
      } catch (error) {
        alert('Sorry, something went wrong');
        history.push('/');
      }
    }
    getDeck();
  }, [deckId, history]);

  const submitHandler = (event, updatedDeck) => {
    event.preventDefault();
    updateDeck(updatedDeck);
    setCurrentDeck(updatedDeck);
    history.push(`/decks/${deckId}`);
  };

  const changeHandler = (event) => {
    setCurrentDeck({
      ...currentDeck,
      [event.target.id]: event.target.value,
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
            <Link to={`/decks/${deckId}`}>{currentDeck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <div>
        <h1>Edit Deck</h1>
        <CreateDeckForm
          deck={currentDeck}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
        />
      </div>
    </div>
  );
};

export default EditDeck;
