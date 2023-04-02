import React from "react";
import "./notecard.css";
import Button from 'react-bootstrap/Button';

const Notecard = () => {
  return (
    <div className="cardMain">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Card title</h1>
          <h2 className="card-subtitle mb-2 text-muted">Card subtitle</h2>
          <h5 className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </h5>
          <Button variant="outline-primary">Edit</Button>{'   '}
      <Button variant="outline-secondary">Delete</Button>{' '}
        </div>
      </div>
    </div>
  );
};

export default Notecard;
