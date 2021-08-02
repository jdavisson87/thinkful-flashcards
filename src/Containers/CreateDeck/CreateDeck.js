import React from 'react';
import { Link } from 'react-router-dom';
import CreateDeckForm from '../../Forms/CreateDeckForm';

const CreateDeck = ({ submitHandler }) => {
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
          <li
            className="breadcrumb-item active"
            aria-current="page"
            key="create-deck-link"
          >
            Create Deck
          </li>
        </ol>
      </nav>
      <CreateDeckForm submitHandler={submitHandler} />
    </div>
  );
};

export default CreateDeck;
