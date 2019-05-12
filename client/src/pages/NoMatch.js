import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

function NoMatch() {
  return (
    <Container fluid>
      <Jumbotron>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Jumbotron>
    </Container>
  );
}

export default NoMatch;
