import React, { Component } from "react";
import {
  Container,
  Jumbotron,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import BookCard from "../components/BookCard";

class Search extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  updateBooks = (books) => {
    this.setState({books: books})
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
    let authorStr="a bunch of authors"
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Google Book Search</h1>
        </Jumbotron>

        <Row>
          <h3> SEARCH PAGE </h3>
        </Row>
        <Row>

            <SearchForm updateBooks={this.updateBooks} />

            {this.state.books.length ? (
              <ListGroup>
                {this.state.books.map(book => (
                  // MAKE A STRING OUT OF THE AUTHORS!
                  
                  <ListGroupItem key={book._id}>
                    <BookCard
                      title={book.title}
                      authors={authorStr}
                      image={book.image}
                      description={book.description}
                      mainbuttonfunc={()=>{}}
                      mainbuttontext="view"  
                      secondbuttonfunc={()=>{}}
                      secondbuttontext="save"
                    />

                    {/* <Button onClick={() => this.deleteBook(book._id)} /> */}
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )}

        </Row>
      </Container>
    );
  }
}

export default Search;
