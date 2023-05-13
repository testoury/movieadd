import React , {useState} from 'react';
import { moviesList } from './assets/Data';
import MovieList from './component/MovieList';



const App = () => {
  const [movies , setMovies]= useState(moviesList)
  return (
    <div>
      <Search/> 
      <MovieList movies={movies}/>
      <AddUrs/>
    </div>
  );
}

export default App;
