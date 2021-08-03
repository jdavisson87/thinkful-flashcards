import React from 'react';

const StudyCard = ({
  card,
  flipCard,
  frontSide,
  nextCard,
  cardIndex,
  deckLength,
}) => {
  return (
    <div className="card p-3">
      <h5 className="card-title">
        Card {cardIndex} of {deckLength}
      </h5>
      <div className="card-text">{frontSide ? card.front : card.back}</div>
      <div>
        <button className="btn btn-secondary m-1" onClick={flipCard}>
          Flip
        </button>
        <button className="btn btn-primary m-1" onClick={nextCard}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StudyCard;
