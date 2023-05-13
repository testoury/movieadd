import React from 'react';

const MovieList = ({movies}) => {
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
