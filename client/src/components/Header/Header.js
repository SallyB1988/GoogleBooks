import React from "react";
import {Jumbotron} from "react-bootstrap";


function Header() {

    return (
      <Jumbotron>
      <h1 className="text-center">Google Book Finder</h1>
      <h5 className="text-center">Find and save your favorite books</h5>
    </Jumbotron>
    );
}

export default Header;
