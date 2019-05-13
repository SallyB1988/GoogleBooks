import React from "react";
import {Card, Button } from 'react-bootstrap';
import API from "../../utils/API";

function BookCard(props) {

    return (
      <Card>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle>{props.authors}</Card.Subtitle>
          <Card.Img variant="left" src={props.image} />
          <Card.Text>{props.description}</Card.Text>
          <Card.Link>
            <Button onClick={props.mainbuttonfunc}>
              {props.mainbuttontext}
            </Button>
            <Button onClick={props.secondbuttonfunc}>
              {props.secondbuttontext}
            </Button>
          </Card.Link>
        </Card.Body>
      </Card>
    );
}

export default BookCard;
