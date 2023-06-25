import React, { useState , useEffect} from "react";
import { moviesList } from "./assets/Data";
import MovieList from "./component/MovieList";
import Search from "./component/Search";
import AddUrs from "./component/AddUrs";
import { Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const Home = ({isLoggedIn}) => {
const navigate=useNavigate()
useEffect(
  ()=>{
    isLoggedIn ? null : navigate("/login")
  }
  ,
  []
)

  const [movies, setMovies] = useState(moviesList);
  const [searchWord, setSearchWord] = useState("");
  const [searchRate, setSearchRate] = useState(0);

  return (
    <div>
      
      <span>
        <Navbar />
      </span>
      <Search
        setSearchWord={setSearchWord}
        searchRate={searchRate}
        setSearchRate={setSearchRate}
      />
      <AddUrs setMovies={setMovies} />
      <MovieList
        
        movies={
          searchWord
            ? movies.filter((e) =>
                e.title.toLowerCase().includes(searchWord.toLowerCase())
              )
            : searchRate
            ? movies.filter((e) => e.rate >= searchRate)
            : movies
        }
      />
    </div>
  );
};
export default Home;
