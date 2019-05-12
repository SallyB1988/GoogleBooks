import React, { Component } from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";

import API from "../utils/API";
import SearchForm from "../components/SearchForm";

class Search extends Component {
  state = {
    books: [],
    firstName: "",
    lastName: "",
    highScore: 0
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({
          books: res.data,
          firstName: "",
          lastName: "",
          highScore: 0
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
          <SearchForm />
        </Row>
      </Container>
    );
  }
}

export default Search;
