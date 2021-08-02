import React, { useState, useEffect } from 'react';
import { Route, Switch, useParams, useHistory } from 'react-router-dom';
import { readDeck } from '../../utils/api/index';
import DeckView from '../../Containers/DeckView/DeckView';
import CardRoutes from '../CardRoutes/CardRoutes';
import EditDeck from '../../Components/EditDeck/EditDeck';

const DeckRoutes = ({ deleteDeck, setDecks, decks }) => {
  const [deck, setDeck] = useState({});
  const { deckId } = useParams();
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
      <Switch>
        <Route exact path={'/decks/:deckId'}>
          <DeckView
            deckId={deck.id}
            name={deck.name}
            description={deck.description}
            deleteDeck={deleteDeck}
          />
        </Route>
        <Route path={'/decks/:deckId/edit'}>
          <EditDeck
            currentDeck={deck}
            setCurrentDeck={setDeck}
            setDecks={setDecks}
            decks={decks}
          />
        </Route>
        <Route path={'/decks/:deckId/cards'}>
          <CardRoutes deck={deck} />
        </Route>
      </Switch>
    </div>
  ) : (
    <p>Loading....</p>
  );

  return content;
};

export default DeckRoutes;
