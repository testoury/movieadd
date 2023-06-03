import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Rate from './Rate';
import './css/MovieCard.css';
import MovieModal from './MovieModal';
import {AddFavmovie} from '../Redux/Actions' ;
import { useDispatch, useSelector } from 'react-redux';






const MovieCard = ({movieDetails  }) => {
  const { id, title, posterUrl, description, rate, posterFile } = movieDetails;
  const dispatch=useDispatch();
  const [showModal, setShowModal] = useState(false);
  const favorite=useSelector(state=>state)
  
  const handleDispatch = (fav) => {
    const isMovieInCart = favorite.Cart.find((el) => el.id === fav.id);
    if (isMovieInCart) {
      alert("You already have this movie in your list.");
    } else {
      dispatch(AddFavmovie(fav));
      alert("Your movie has been added to favorites.");
    }
  };
  

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card style={{ width: '18rem', margin: '10px', display: 'flex', flexDirection: 'column', animation: 'fade-in 2s ease' }}>
        <Card.Img style={{ width: '100%', height: '400px' }} variant="top" src={posterUrl ? posterUrl : posterFile} />
        <Card.Body className="custom-card-body" style={{ width: '100%', height: '100%', animation: 'fade-in 2s ease' }}>
          <hr />
          <Card.Title style={{ fontSize: '0.95rem', width: '100%', height: '58px', marginBottom: '30px' }}>
            <h2>{title}</h2>
          </Card.Title>
          <hr />
          <Card.Text style={{ width: '100%', height: '150px' }}>{description}</Card.Text>
          <hr />
          <ListGroup className="list-group-flush">
            <ListGroup.Item style={{ marginLeft: '30%' }}>
              <Rate rate={rate} setSearchRate={() => {}} />
            </ListGroup.Item>
          </ListGroup>
          <hr />
          <div style={{display:'flex' , justifyContent:"space-around", alignItems:"center"}}>
          <Button variant="primary"  onClick={handleOpenModal}>
            See more
          </Button>
          <Button variant="secondary "  onClick={()=>handleDispatch(movieDetails)} style={{background:'white' , color:'black' }} >
            Add to favorite
          </Button>
          </div>
        </Card.Body>
      </Card>

      <MovieModal show={showModal} handleClose={handleCloseModal} movieDetails={movieDetails} />
    </>
  );
};

export default MovieCard;
