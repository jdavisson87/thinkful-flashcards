import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import DeckRoutes from '../DeckRoutes/DeckRoutes';
import DecksList from '../../Components/DecksList/DecksList';
import CreateDeck from '../../Containers/CreateDeck/CreateDeck';
import { createDeck, listDecks, deleteDeck } from '../../utils/api/index';

const Decks = () => {
  const history = useHistory();
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function getDecks() {
      try {
        const response = await listDecks();
        setDecks(response);
      } catch (error) {
        throw error;
      }
    }
    getDecks();
  }, []);

  async function submitHandler(event, newDeck) {
    event.preventDefault();
    try {
      const response = await createDeck(newDeck);
      await setDecks([...decks, { ...response }]);
      history.push(`/decks/${response.id}`);
    } catch (error) {
      alert(
        'Sorry, something went wrong when we tried to create a new deck.  Please try again'
      );
      history.push('/');
    }
  }

  const deckDeleteHandler = async (id) => {
    if (window.confirm('Delete this deck?')) {
      await deleteDeck(id);
      setDecks((curr) => curr.filter((deck) => deck.id !== id));
      history.push('/');
    }
  };

  return (
    <div>
      <Switch>
        <Route exact path={'/'}>
          <DecksList decks={decks} deleteDeck={deckDeleteHandler} />
        </Route>
        <Route path={'/decks/new'}>
          <CreateDeck submitHandler={submitHandler} />
        </Route>
        <Route path={'/decks/:deckId'}>
          <DeckRoutes deleteDeck={deckDeleteHandler} />
        </Route>
      </Switch>
    </div>
  );
};

export default Decks;
