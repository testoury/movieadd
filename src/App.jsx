import React , {useState} from 'react';
import { moviesList } from './assets/Data';
import MovieList from './component/MovieList';
import Search from './component/Search' ;
import AddUrs from './component/AddUrs';


const App = () => {
  const [movies , setMovies]= useState(moviesList);
  const [searchWord , setSearchWord ] = useState ("")
  const [searchRate , setSearchRate] = useState(0)
  return (
    <div >
      <Search  setSearchWord={setSearchWord} searchRate={searchRate} setSearchRate={setSearchRate}/> 
      
      <MovieList movies={searchWord ? movies.filter(e=>e.title.toLowerCase().includes(searchWord.toLowerCase())) : searchRate ?movies.filter(e=>e.rate==searchRate) :movies }/>
      <AddUrs setMovies={setMovies} />
      
    </div>
  );
}

export default App;
