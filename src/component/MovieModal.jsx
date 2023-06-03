import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Rate from './Rate';
import './css/MovieModal.css';

const MovieModal = ({ show, handleClose, movieDetails }) => {
  const { title, posterUrl, description, rate, trailerUrl } = movieDetails;

  const handleWatchTrailer = () => {
    // Open a new tab/window with the trailer URL
    window.open(trailerUrl, '_blank');
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Title>{title}</Modal.Title>
      <hr />

      <Modal.Body>
        <div className="d-flex align-items-center justify-content-center mb-4">
          <img src={posterUrl} alt={title} style={{ maxWidth: '100%', maxHeight: '400px' }} />
          <hr />
        </div>
        <p>{description}</p>
        <hr />
        <Rate rate={rate} setSearchRate={() => {}} />
        <hr />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleWatchTrailer} >
          Watch Trailer
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieModal;
