import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const MovieCard = ({ movieDetails:{id , title, posterUrl, description, rate } }) => {
    return (
        
    <Card  style={{ width: "18rem" , margin:"100px" , display:"flex" , flexWrap:"wrap" , }}>
      <Card.Img  style={{width:"100%" , height:"50%" } } variant="top" src={posterUrl} />
      <Card.Body style={{ width:"100%" , height:"100%" ,}}>
        <Card.Title style={{fontSize:"1rem"}}><h2 >{title}</h2></Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>{rate}</ListGroup.Item>
      </ListGroup>
        <Button  variant="primary">See more</Button>
      </Card.Body>
    </Card>

      
    );
}

export default MovieCard;
