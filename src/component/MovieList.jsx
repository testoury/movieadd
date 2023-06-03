import React from 'react';
import MovieCard from './MovieCard';
import './css/movielist.css';

const MovieList = ({movies  }) => {
    return (
        <div className="movie-list" style={{ display: 'flex', flexWrap: 'wrap', marginTop:'5rem' ,marginLeft:"4rem" }}>
            {
                movies.map(e=>(
                    <div className="movie-card fade-in ">
                        <MovieCard  movieDetails={e}  />
                    </div>
                ))
            }
        </div>
    );
}

export default MovieList;