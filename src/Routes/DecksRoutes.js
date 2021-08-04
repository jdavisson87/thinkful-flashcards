import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DecksList from '../Containers/DecksList/DecksList';
import CreateDeck from '../Containers/CreateDeck/CreateDeck';
import EditDeck from '../Containers/EditDeck/EditDeck';
import Study from '../Containers/Study/Study';
import EditCard from '../Containers/EditCard/EditCard';
import NewCard from '../Containers/NewCard/NewCard';
import DeckView from '../Containers/DeckView/DeckView';
import NotFound from '../Layout/NotFound';

const Decks = () => {
  return (
    <div>
      <Switch>
        <Route exact path={'/'}>
          <DecksList />
        </Route>
        <Route path={`/decks/:deckId/cards/:cardId/edit`}>
          <EditCard />
        </Route>
        <Route path={'/decks/:deckId/cards/new'}>
          <NewCard />
        </Route>
        <Route path={'/decks/:deckId/study'}>
          <Study />
        </Route>
        <Route path={'/decks/new'}>
          <CreateDeck />
        </Route>
        <Route path={'/decks/:deckId/edit'}>
          <EditDeck />
        </Route>
        <Route path={'/decks/:deckId'}>
          <DeckView />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default Decks;
