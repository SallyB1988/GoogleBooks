import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import BookCard from "../components/BookCard";
import Header from "../components/Header";

const styles = {
  scrollDiv: {
    height: 450,
    overflowY: "auto"
  }
};

class Search extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    // this.loadBooks();
  }

  updateBooks = (books) => {
    this.setState({books: books})
  }

  handleSave = (book) => {  
    API.saveBook(book)
      .then(res =>{
        let booksCopy = this.state.books;
        booksCopy.map((b) => {
          if (b.id === book.id) {
            b.saved=true;
          }
        })
        console.log(booksCopy);
        this.setState({
          books: booksCopy
        })
      }
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
        <Header />

        <Row className="justify-content-md-center">
          <Col md="8">
            <SearchForm updateBooks={this.updateBooks} />
            <div style={styles.scrollDiv}>
            
            {this.state.books.length ? (
              <ListGroup>
                {this.state.books.map(book => (
                  <ListGroupItem key={book._id}>
                    <BookCard
                      title={book.title}
                      authors={book.authors}
                      image={book.image}
                      description={book.description}
                      mainButtonLink={book.link}
                      mainButtonText="VIEW"  
                      secondButtonFunc={()=>this.handleSave(book)}
                      secondButtonText="SAVE"
                      disabled={book.saved}
                    />

                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <h3 className="text-center">No Results to Display</h3>
              )}
              </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
