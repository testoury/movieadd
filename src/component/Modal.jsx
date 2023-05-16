import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Modal.css";
import { Form } from "react-bootstrap";

const Modal = ({setMovies}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const openModal = () => setShow(true);
  const [newMovie, setNewMovie] = useState({
    id:Date.now() ,
    title: ``,
    description: ``,
    poster: ``,
    posterFile:'',
    rate: 0,
  });
   const handleForm=(proprety)=>(
    setNewMovie(prevState=>{return{
      ...prevState,
      [proprety.target.name] : proprety.target.value
    }})
   )
  return (
    <div>
      <button onClick={openModal}>Add Your Movie From Here !! </button>
      {show && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <h2>Add Movie ..!!</h2>
            <Form >
            <Form.Group >
          <Form.Label>Title</Form.Label>
           <Form.Control
           type="text "
           name="title" 
           onChange={(event)=>handleForm(event)}
           />
             </Form.Group>
             <Form.Group >
          <Form.Label>Description</Form.Label>
           <Form.Control
           type="text "
           name="description" 
           onChange={(event)=>handleForm(event)}
           />
             </Form.Group>
             <Form.Group >
          <Form.Label>Rate</Form.Label>
           <Form.Control
           type="number"
           name="rate" 
           onChange={(event)=>handleForm(event)}
           />
             </Form.Group>
             <Form.Group>
                <Form.Label>PosterUrl</Form.Label>
                <div className="poster-input">
                  <Form.Control
                    type="text"
                    name="posterUrl"
                    placeholder="Enter URL"
                    onChange={(event)=>handleForm(event)}
                  />
                  <span>or</span>
                  <Form.Control
                    type="file"
                    name="posterFile"
                    onChange={(event)=>handleForm(event)}
                  />
                </div>
              </Form.Group>
             </Form>
             
              <div style={{ marginLeft: "65%" }}>
                <Button type="button" onClick={handleClose} variant="primary">
                  Cancel
                </Button>
                <Button style={{ marginLeft: "10px" }} type="Submit" onClick={()=>(setMovies(prev=>[...prev , newMovie ]))} >
                  Save
                </Button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
