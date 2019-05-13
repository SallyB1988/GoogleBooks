import React from "react";

import { Card, Button, Row, Col } from "react-bootstrap";
const styles = {
  linkStyle: {
    color: "white",
    textDecoration: "none"
  },
  title: {
    fontSize: 32
  },
  imageSize: {
    // width: 150,
    justify: "left"
  }
};

function BookCard(props) {
  return (
    <Card>
      <Card.Body>
        <Row className="justify-content-center">
        <Col md="10">
        <Card.Title style={styles.title}>{props.title}</Card.Title>
        <Card.Subtitle className="pb-2">{props.authors}</Card.Subtitle>
        </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="1" className="px-1 d-block justify-content-left">
            <Card.Img style={styles.imageSize} src={props.image} />
          </Col>
          <Col md="9">
            <Card.Text>{props.description}</Card.Text>
          </Col>
        </Row>
        <Row className="d-block">
          <Button className="float-right mx-2">
            <a
              style={styles.linkStyle}
              href={props.mainButtonLink}
              target="_blank"
            >
              {props.mainButtonText}
            </a>
          </Button>

          <Button
            className="float-right mx-2"
            onClick={props.secondButtonFunc}
            disabled={props.disabled}
          >
            {props.secondButtonText}
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
