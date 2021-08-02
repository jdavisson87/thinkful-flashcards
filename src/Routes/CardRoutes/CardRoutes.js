import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CardForm from '../../Forms/CardForm';

const CardRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path={`/decks/:deckId/cards/:cardId/edit`}>
          <CardForm />
        </Route>
      </Switch>
    </div>
  );
};

export default CardRoutes;
