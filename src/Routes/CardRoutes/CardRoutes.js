import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CardForm from '../../Forms/CardForm';

const CardRoutes = ({ deck }) => {
  return (
    <div>
      <Switch>
        <Route path={`/decks/:deckId/cards/:cardId/edit`}>
          <CardForm deck={deck} />
        </Route>
      </Switch>
    </div>
  );
};

export default CardRoutes;
