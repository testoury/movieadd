import React from 'react';
import MovieCard from './MovieCard';
const MovieList = ({movies ,}) => {
    return (
        <div>
            {
                movies.map(e=>(
                    <MovieCard movieDetails={e} />
                ))
            }
        </div>
    );
}

export default MovieList;
