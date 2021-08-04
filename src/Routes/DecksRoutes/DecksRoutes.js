import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

// import DeckRoutes from '../DeckRoutes/DeckRoutes';
import DecksList from '../../Components/DecksList/DecksList';
import CreateDeck from '../../Containers/CreateDeck/CreateDeck';
import EditDeck from '../../Containers/EditDeck/EditDeck';
import Study from '../../Containers/Study/Study';
import EditCard from '../../Containers/EditCard/EditCard';
import NewCard from '../../Containers/NewCard/NewCard';
import DeckView from '../../Containers/DeckView/DeckView';
import { listDecks, deleteDeck } from '../../utils/api/index';

const Decks = () => {
  // const history = useHistory();
  // const [decks, setDecks] = useState([]);
  // const [deck, setDeck] = useState({});

  // useEffect(() => {
  //   async function getDecks() {
  //     try {
  //       const response = await listDecks();
  //       setDecks(response);
  //     } catch (error) {
  //       throw error;
  //     }
  //   }
  //   getDecks();
  // }, []);

  // useEffect(() => {
  //   async function getDeck() {
  //     try {
  //       const response = await readDeck(deck.id);
  //       setDeck(response);
  //     } catch (error) {
  //       alert('Sorry, something went wrong');
  //       history.push('/');
  //     }
  //   }
  //   getDeck();
  // }, [deckId, history]);

  // const deckDeleteHandler = async (id) => {
  //   if (window.confirm('Delete this deck?')) {
  //     await deleteDeck(id);
  //     setDecks((curr) => curr.filter((deck) => deck.id !== id));
  //     history.push('/');
  //   }
  // };

  // <Route path={`/decks/:deckId/cards/:cardId/edit`}>
  //   <EditCard deck={deck} />
  // </Route>
  // <Route path={'/decks/:deckId/cards/new'}>
  //   <NewCard name={deck.name} />
  // </Route>
  // <Route path={'/decks/:deckId/study'}>
  //   <Study />
  // </Route>

  return (
    <div>
      <Switch>
        <Route exact path={'/'}>
          <DecksList />
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
      </Switch>
    </div>
  );
};

export default Decks;
