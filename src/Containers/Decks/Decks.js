import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import DeckPreview from '../../Components/DeckPreview/DeckPreview';
import Deck from '../../Containers/Deck/Deck';
import CreateDeck from '../CreateDeck/CreateDeck';
import { listDecks, deleteDeck } from '../../utils/api/index';

const Decks = () => {
  const [decks, setDecks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getDecks() {
      const response = await listDecks();
      setDecks(response);
    }
    getDecks();
  }, []);

  const deckDeleteHandler = (id) => {
    if (window.confirm('Delete this deck?')) {
      deleteDeck(id);
      setDecks((current) => current.filter((deck) => deck.id !== id));
      history.push('/');
    }
  };
  let content =
    decks.length > 0 ? (
      decks.map((deck) => (
        <DeckPreview
          name={deck.name}
          description={deck.description}
          deckId={deck.id}
          onDelete={deckDeleteHandler}
          key={`${deck.name}${deck.id}`}
        />
      ))
    ) : (
      <p>There are currently no decks available. How about we create one?</p>
    );
  return (
    <div>
      <Link to={`/decks/new`} className="btn btn-secondary">
        <i className="bi bi-plus-lg"></i> {` `}Create Deck
      </Link>
      <Switch>
        <Route exact path={'/decks/:deckId'}>
          <Deck />
        </Route>
        <Route path={'/decks/new'}>
          <CreateDeck />
        </Route>
        <Route>
          <ul className="mt-1 p-0">{content}</ul>
        </Route>
      </Switch>
    </div>
  );
};

export default Decks;
