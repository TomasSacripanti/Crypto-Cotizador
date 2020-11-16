import React, { Component } from "react";
import "./styles/Container.css";
import Form from "./Form";
import Outcome from "./Outcome";

export class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apikey: '38ed49ddc1c6fe9bd30b34dddaadcdc54e727f05f5fc99f05b9d4bffcf984203',
      data: undefined,
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

  apiCall = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null});
    try {
      const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${this.state.cryptoValue}&tsyms=${this.state.currencyValue}&api_key=${this.state.apikey}`;
      const response = await fetch(URL);
      const data = await response.json();
      this.setState({loading: false, data: data.RAW[this.state.cryptoValue][this.state.currencyValue]})
    } catch (error) {
      this.setState({loading: false, error: error});
    }
  }

  render() {
    return (
      <div className="main d-flex justify-content-around align-items-center mt-4">
        <Form onCryptoChange={this.setCryptoValue} onCurrencyChange={this.setCurrencyValue} crypto={this.state.cryptoValue} currency={this.state.currencyValue} getQuotation={this.apiCall} apikey={this.state.apikey} ></Form>
        <Outcome error={this.state.error} loading={this.state.loading} data={this.state.data} ></Outcome>
      </div>
    );
  }
}

export default Container;
