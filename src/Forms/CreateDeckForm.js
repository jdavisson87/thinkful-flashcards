import React from 'react';

const CreateDeckForm = () => {
  return (
    <form>
      <h1>Create Deck</h1>
      <div className="form-group">
        <label for="deck-form-name">Name</label>
        <input
          id="deckName"
          type="text"
          className="form-control"
          placeholder="Deck Name"
        />
      </div>
      <div className="form-group">
        <label for="deck-form-description">Description</label>
        <textarea
          type="text"
          className="form-control"
          placeholder="Brief description of the deck"
          rows="5"
        />
      </div>
      <div>
        <button className="btn btn-secondary mr-2">Cancel</button>
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default CreateDeckForm;
