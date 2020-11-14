import React, { Component } from "react";
import Container from "./components/Container";
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="app container-fluid d-flex flex-column align-items-center">
        <h1 className="mt-4 text-white">Cotizá Cryptomonedas al instante!</h1>
        <Container></Container>
      </div>
    );
  }
}

export default App;
