import React, { Component } from "react";
import { Form } from "react-bootstrap";

class simpleState extends Component {
  state = {
    name: "Arkademy",
    msg: "Selamat Datang",
  };
  render() {
    return (
      <div>
        <h1>Simple State</h1>
        <p>{this.state.name}</p>
        <p>{this.state.msg}</p>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              this.setState({
                name: e.target.value,
              });
            }
          }}
        />
        <Form.Label>Message</Form.Label>
        <Form.Control
          type="text"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              this.setState({
                msg: e.target.value,
              });
            }
          }}
        />
      </div>
    );
  }
}
export default simpleState;
