import React from 'react';
import { FaSearch } from "react-icons/fa";
import Rate from './Rate';
import Navbar from './NavBar';
import Addurs from './AddUrs';

const Search = ({setSearchWord ,searchRate , setSearchRate }) => {
  return (
    <div style={{display:'flex' }}> <Navbar /> <div style={{ position: "relative", display: "inline-block" }}>
      <input 
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "solid white",
          outline: "none",
          backgroundColor: "#292929",
          color: "white",
          fontSize: "1rem",
          marginRight: "10px",
          marginLeft:"200px",
          marginTop: "30px",
          width: "300px",
          
        }}
        type={"text"} 
        placeholder='Search ...' 
        onChange={(event)=>setSearchWord(event.target.value)}
      />
      <span 
        style={{
          position: "absolute",
          textAlign:'center',
          top: "60%",
          right: "30px",
          transform: "translateY(-50%)",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        <FaSearch />
      </span>
      <span style={{
          position: 'absolute',
          top: "70%",
          left: "80%",
          transform: "translateY(40%)",
          color: "#fff",
          cursor: "pointer",
        }}>
      <Rate   rate={searchRate} setSearchRate={setSearchRate} />
      </span>
      
      
    </div>
    </div>
  );
}
export default Search;