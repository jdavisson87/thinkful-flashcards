import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useParams, useHistory } from 'react-router-dom';
import { readDeck } from '../../utils/api/index';
import DeckView from '../../Containers/DeckView/DeckView';
import CardRoutes from '../CardRoutes/CardRoutes';

const DeckRoutes = ({ deleteDeck }) => {
  const [deck, setDeck] = useState({});
  const { deckId } = useParams();
  const { name } = deck;
  const history = useHistory();

  useEffect(() => {
    async function getDeck() {
      try {
        const response = await readDeck(deckId);
        setDeck(response);
      } catch (error) {
        alert('Sorry, something went wrong');
        history.push('/');
      }
    }
    getDeck();
  }, [deckId]);

  let content = deck ? (
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
            {name}
          </li>
        </ol>
      </nav>
      <Switch>
        <Route path={'/decks/:deckId/cards'}>
          <CardRoutes />
        </Route>
        <Route exact path={'/decks/:deckId'}>
          <DeckView
            deckId={deck.id}
            name={deck.name}
            description={deck.description}
            deleteDeck={deleteDeck}
          />
        </Route>
      </Switch>
    </div>
  ) : (
    <p>Loading....</p>
  );

  return content;
};

export default DeckRoutes;
