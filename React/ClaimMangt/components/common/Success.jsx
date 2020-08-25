import { Button, Alert } from "react-bootstrap";
import React, { Component } from "react";
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
import FooterComponent from "./FooterComponent.jsx";

class Success extends React.Component {
  constructor(props) {
    super(props);
  }
  navigate(event) {
    event.preventDefault();
    browserHistory.push("claim");
  }
  render() {
    return (
      <div>
       
        <Alert variant="success">
          <Alert.Heading>Claim Updated Sucessfully!!</Alert.Heading>
          <p>Thank you for updating the claim details.</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button variant="outline-success" type="button" onClick= {this.navigate}>
              Proceed to Home Page
            </Button>
          </div>
          <FooterComponent></FooterComponent>
        </Alert>
      </div>
    );
  }
}
export default Success;
