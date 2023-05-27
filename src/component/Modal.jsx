  import React, { useState } from "react";
  import Button from "react-bootstrap/Button";
  import "./css/Modal.css";
  import { Form } from "react-bootstrap";
  import { AiOutlineUpload } from "react-icons/ai";
  import {RxUpload} from "react-icons/rx" ; 
  import {AiOutlineHeart , AiFillHeart } from 'react-icons/ai'
  const Modal = ({setMovies}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const openModal = () => setShow(true);
    const handleRateChange = (value) => {
      setNewMovie((prevMovie) => {
        return {
          ...prevMovie,
          rate: value,
        };
      });
    };
    const [newMovie, setNewMovie] = useState({
      
      id:Date.now() ,
      title: ``,
      description: ``,
      poster: ``,
      posterFile:'',
      rate:0,
    });
    const handleForm=(proprety)=>(
      setNewMovie(prevState=>{return{
        ...prevState,
        [proprety.target.name] : proprety.target.value
      }})
    )
    return (
      <div>
        <Button onClick={openModal}>Add Your Movie Here !! <AiOutlineUpload/> </Button>
        {show && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleClose}>
                &times;
              </span>
              <h2 style={{justifyContent:'center' , marginLeft:'35%'}}>ADD MOVIE <RxUpload /></h2><hr />
              <Form >
              <Form.Group >
            <Form.Label>Title:</Form.Label>
            <Form.Control
            type="text "
            name="title" 
            placeholder="UR MOVIE NAME"
            onChange={(event)=>handleForm(event)}
            />
              </Form.Group>
              <Form.Group >
            <Form.Label>Description:</Form.Label>
            <Form.Control className="discbox"
            type="text "
            name="description" 
            placeholder="MOVIE DESCRIPTION"
            as="textarea" rows={6} 
            
            onChange={(event)=>handleForm(event)}
            />
              </Form.Group>
              <Form.Group >
            <Form.Label>Rate:</Form.Label>
            <div  style={{marginLeft:"37%"}} className="heart-rating">
              {[1, 2, 3, 4, 5].map((x) => (
                <span key={x} onClick={() => handleRateChange(x)}>
                  {newMovie.rate >= x ? (
                    <AiFillHeart className="active" />
                  ) : (
                    <AiOutlineHeart />
                  )}
                </span>
              ))}
            </div>
          </Form.Group>
              <Form.Group>
                  <Form.Label>PosterUrl:</Form.Label>
                  <div className="poster-input">
                    <Form.Control
                      type="text"
                      name="posterUrl"
                      placeholder="ENTER URL"
                      onChange={(event)=>handleForm(event)}
                    />
                    <span style={{fontWeight:'bold', marginLeft:'45%'}} >OR</span>
                    <Form.Label>CHOOSE FILE:</Form.Label>
                    <Form.Control
                      type="file"
                      name="posterFile"
                      onChange={(event)=>handleForm(event)}
                    />
                  </div>
                </Form.Group>
              </Form>
              
                <div style={{ marginLeft: "70%" , marginTop:'10px' }}>
                  <Button type="button" onClick={handleClose} variant="primary">
                    Cancel
                  </Button>
                  <Button style={{ marginLeft: "10px" }} type="Submit" onClick={()=>{setMovies(prev=>[...prev , newMovie ]) , handleClose() }} >
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
