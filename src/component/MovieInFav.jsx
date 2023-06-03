import React from 'react';
import './css/movieinfav.css';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import {DeleteFavmovie} from '../Redux/Actions'
const MovieInFav = ({ movieDetails }) => {
    const dispatch = useDispatch()

  return (
    <div className="moviecard"  >
      <img src={movieDetails.posterUrl} alt="Movie Poster" />
      <h5>{movieDetails.title}</h5>
      <p>{movieDetails.description}</p>
      <Button onClick={()=>dispatch(DeleteFavmovie(movieDetails.id))}>Remove</Button>
    </div>
  );
};

export default MovieInFav;
