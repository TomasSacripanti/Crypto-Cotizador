import React, { Component } from "react";
import "./styles/Container.css";
import Form from "./Form";
import Outcome from "./Outcome";

export class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      cryptoValue: '',
      currencyValue: '',
    };
  }
  

  setCryptoValue = (value) => {
    this.setState({ cryptoValue: value });
  }
  setCurrencyValue = (value) => {
    this.setState({ currencyValue: value});
  }

  render() {
    return (
      <div className="main d-flex justify-content-around align-items-center mt-4">
        <Form onCryptoChange={this.setCryptoValue} onCurrencyChange={this.setCurrencyValue} crypto={this.state.cryptoValue} currency={this.state.currencyValue}></Form>
        <Outcome error={this.state.error} loading={this.state.loading} ></Outcome>
      </div>
    );
  }
}

export default Container;
