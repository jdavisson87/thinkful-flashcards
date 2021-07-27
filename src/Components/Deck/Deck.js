import React from 'react';
import { Link } from 'react-router-dom';

const Deck = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex flex-row justify-content-between">
          <h4 className="card-title">Deck Title</h4>
          <h6 className="card-subtitle text-muted">3 cards</h6>
        </div>
        <p className="card-text">Deck Description</p>
        <div className="float-left">
          <Link className="btn-lg btn-secondary m-1">
            <i className="bi bi-eye" />
            {` `}View
          </Link>
          <Link className="btn-lg btn-primary m-1">
            <i className="bi bi-book-half"></i>
            {` `}Study
          </Link>
        </div>
        <Link className="btn-lg btn-danger float-right">
          <i className="bi bi-trash" />
        </Link>
      </div>
    </div>
  );
};

export default Deck;
