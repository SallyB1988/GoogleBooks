import React, { Component } from "react";
import {
  Container,
  Jumbotron,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Image
} from "react-bootstrap";

import API from "../utils/API";
import SearchForm from "../components/SearchForm";

class Search extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Google Book Search</h1>
        </Jumbotron>

        <Row>
          <h3> SEARCH PAGE </h3>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
            <SearchForm />
          </Col>
          <Col size="md-6 sm-12">
            {this.state.books.length ? (
              <ListGroup>
                {this.state.books.map(book => (
                  <ListGroupItem key={book._id}>
                    <strong>
                      {book.title} by {book.authors[0]}
                    </strong>
                    <Image src={book.image} />
                    <p>{book.description}</p>
                    <Button onClick={() => this.deleteBook(book._id)} />
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
