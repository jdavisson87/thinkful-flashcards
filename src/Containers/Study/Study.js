import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { readDeck } from '../../utils/api/index';
import StudyCard from '../../Components/StudyCard/StudyCard';

const Study = () => {
  const { deckId } = useParams();
  const history = useHistory();

  const [frontShowing, isFrontShowing] = useState(true);
  const [currentDeck, setCurrentDeck] = useState({});
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    async function getDeck() {
      const deckData = await readDeck(deckId);
      setCurrentDeck(deckData);
    }
    getDeck();
  }, [deckId]);

  const flipCard = () => {
    isFrontShowing(!frontShowing);
  };

  const nextCard = () => {
    const length = currentDeck.cards.length;
    if (currentCard + 2 <= length) {
      setCurrentCard(currentCard + 1);
      isFrontShowing(true);
    } else {
      if (
        window.confirm(
          "Restart Cards? Click 'cancel' to return to the homepage"
        )
      ) {
        setCurrentCard(0);
        isFrontShowing(true);
      } else {
        history.push('/');
      }
    }
  };

  if (!currentDeck) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" key="home-link">
            <Link to={'/'}>
              <i className="bi bi-house-door-fill" />
              {` `}Home
            </Link>
          </li>
          <li className="breadcrumb-item" key="deck-link">
            <Link to={`/decks/${deckId}`}>{currentDeck.name}</Link>
          </li>
          <li
            className="breadcrumb-item active"
            aria-current="page"
            key="study-link"
          >
            Study
          </li>
        </ol>
      </nav>
      <h1>Study: {currentDeck.name}</h1>

      {currentDeck.cards.length > 2 ? (
        <div>
          <StudyCard
            card={currentDeck.cards[currentCard]}
            cardIndex={currentCard + 1}
            deckLength={currentDeck.cards.length}
            frontSide={frontShowing}
            flipCard={flipCard}
            nextCard={nextCard}
          />
        </div>
      ) : (
        <div>
          <h2>Not enough cards.</h2>
          <p>
            You need at least 3 cards to study. There{' '}
            {currentDeck.cards.length === 1 ? 'is' : 'are'} currently{' '}
            {currentDeck.cards.length} card
            {currentDeck.cards.length === 0 || currentDeck.cards.length > 1
              ? 's'
              : ''}{' '}
            in this deck
          </p>
          <Link
            to={`/decks/${deckId}/cards/new`}
            className="btn-lg btn-primary m-1"
          >
            <i className="bi bi-plus-lg" />
            {` `}Add Card
          </Link>
        </div>
      )}
    </div>
  );
};

export default Study;
