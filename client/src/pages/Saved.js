import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import API from "../utils/API";
import BookCard from "../components/BookCard";
import Header from "../components/Header";

const styles = {
  scrollDiv: {
    height: 450,
    overflowY: "auto"
  }
};

class Saved extends Component {
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

  handleRemove = (id) => {  
    console.log('deleting book');
    console.log(id);
    API.deleteBook(id)
      .then(res =>{
        this.loadBooks();
        console.log("book deleted");;
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
            <h2>SAVED BOOKS</h2>
            <div style={styles.scrollDiv}>

            {this.state.books.length ? (
              <ListGroup>
                {this.state.books.map(book => (
                  <ListGroupItem key={book.id}>
                    <BookCard
                      title={book.title}
                      authors={book.authors}
                      image={book.image}
                      description={book.description}
                      mainButtonLink={book.link}
                      mainButtonText="view"
                      secondButtonFunc={() => this.handleRemove(book._id)}
                      secondButtonText="remove"
                      disabled={book.saved}
                      />
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
              )}
              </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
