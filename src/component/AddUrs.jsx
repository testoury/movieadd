import React, { useState } from 'react';
import Modal from './Modal';


const Addurs = ({setMovies}) => {
 const [ show , setShow] = useState(false);
 const  handleClose=()=>setShow(false);
    return (
        <div>
            <Modal setMovies={setMovies} show={show} handleClose={handleClose} />
        </div>
    );
}

export default Addurs;
