import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Deck from '../DeckRoutes/DeckRoutes';
import DecksList from '../../Components/DecksList/DecksList';
import CreateDeck from '../../Containers/CreateDeck/CreateDeck';
import { deleteDeck } from '../../utils/api/index';

const Decks = () => {
  const history = useHistory();

  const deckDeleteHandler = async (id) => {
    if (window.confirm('Delete this deck?')) {
      await deleteDeck(id);
      history.push('/');
    }
  };

  return (
    <div>
      <Switch>
        <Route exact path={'/'}>
          <DecksList deleteDeck={deckDeleteHandler} />
        </Route>
        <Route path={'/decks/new'}>
          <CreateDeck />
        </Route>
        <Route path={'/decks/:deckId'}>
          <Deck deleteDeck={deckDeleteHandler} />
        </Route>
      </Switch>
    </div>
  );
};

export default Decks;
