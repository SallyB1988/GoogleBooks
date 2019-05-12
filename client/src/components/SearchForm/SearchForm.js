import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import API from "../../utils/API";

class SearchForm extends Component {
  state = {
    title: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName) {
      API.saveBook({
        firstName: this.state.firstName,
        lastName: this.state.lastName
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            type="title"
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
