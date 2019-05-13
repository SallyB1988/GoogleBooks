import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import API from "../../utils/API";

class SearchForm extends Component {
  state = {
    title: "",
    searchResults: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log('name: ' + name);
    console.log(value);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let title = this.state.title;
    let searchtitle = title.replace(/\s+/g,"+");
    let foundBooks = [];
      API.searchTitle(searchtitle)
        .then(res => {
          let data = res.data.items;
          data.forEach((b) => {
            if (b.searchInfo && b.volumeInfo) {
              foundBooks.push({
                "title": title,
                "description": b.searchInfo.textSnippet,
                "authors": b.volumeInfo.authors,
                "image": b.volumeInfo.imageLinks.thumbnail,
                "link": b.volumeInfo.infoLink
              })
            }
          })
          console.log(foundBooks);
          this.setState({searchResults:  foundBooks})
        })
        .catch(err => console.log(err));
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter title"
            onChange={this.handleInputChange}
            value={this.state.title}
          />
        </Form.Group>
        <Button disabled={!this.state.title} onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default SearchForm;
