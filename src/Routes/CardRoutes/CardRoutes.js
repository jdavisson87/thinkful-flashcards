import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EditCard from '../../Containers/EditCard/EditCard';
import NewCard from '../../Containers/NewCard/NewCard';

const CardRoutes = ({ deck }) => {
  return (
    <div>
      <Switch>
        <Route path={`/decks/:deckId/cards/:cardId/edit`}>
          <EditCard deck={deck} />
        </Route>
        <Route path={'/decks/:deckId/cards/new'}>
          <NewCard name={deck.name} />
        </Route>
        <Route>
          <p>Nothing found</p>
        </Route>
      </Switch>
    </div>
  );
};

export default CardRoutes;
