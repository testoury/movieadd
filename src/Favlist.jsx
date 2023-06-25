import React from 'react';

import Navbar from './component/NavBar';
import MovieInFav from './component/MovieInFav';


const Favlist = ({data }) => {
    
    return (
        <div  >
            <Navbar style={{marginTop:"-20px"}}/>  
            <div  style={{ display: 'flex', flexWrap: 'wrap',  }}>
            {
                data.map((e ,key)=>

                <MovieInFav movieDetails={e} key={key}/>
                
                )
            }
            </div>
        </div>
    );
}

export default Favlist ;
