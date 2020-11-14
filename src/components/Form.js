import React, { Component } from "react";
import "./styles/Form.css";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoList: undefined,
      crypto: '',
      currency: '',
    };
  }
  componentDidMount() {
    this.loadCryptos();
  }
  loadCryptos = async () => {
    this.setState({ loading: true });
    try {
      const URL = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD";
      const response = await fetch(URL);
      const data = await response.json();
      this.setState({ loading: false, cryptoList: data.Data})
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleCurrencyChange = (e) => {
    e.preventDefault();
    this.props.onCurrencyChange(e.target.value);
  };

  handleCryptoChange = (e) => {
    e.preventDefault();
    this.props.onCryptoChange(e.target.value);
  };

  render() {
    if (this.state.cryptoList) {
      let options = this.state.cryptoList.map((crypto, index) => {
        return (
          <option key={index} value={crypto.CoinInfo.Name}>
            {crypto.CoinInfo.FullName}
          </option>
        );
      });
      return (
        <form className="form w-50 d-flex flex-column justify-content-around px-5">
          <select
            onChange={this.handleCurrencyChange}
            name="currencyValue"
            value={this.props.currency}
            className="form-control"
          >
            <option value="divisa">Divisa</option>
            <option value="USD">Dolar Estadounidense</option>
            <option value="EUR">Euros</option>
            <option value="GBP">Libras</option>
            <option value="ARS">Peso Argentino</option>
            <option value="MXN">Peso Mexicano</option>
          </select>
          <select
            onChange={this.handleCryptoChange}
            name="cryptoValue"
            value={this.props.crypto}
            className="form-control"
          >
            <option value="crypto">Cryptomonedas</option>
            {options}
          </select>
          <button onClick={this.sendData} className="btn btn-success">
            Cotizar
          </button>
        </form>
      );
    }
    if(this.state.error) {
      return (
        <form className="form w-50 d-flex flex-column justify-content-around px-5">
          <select className="form-control">
            <option value="divisas">Divisas</option>
            <option value="USD">Dolar Estadounidense</option>
            <option value="EUR">Euros</option>
            <option value="GBP">Libras</option>
            <option value="ARS">Peso Argentino</option>
            <option value="MXN">Peso Mexicano</option>
          </select>
          <select className="form-control">
            <option value="crypto">Cryptomonedas</option>
          </select>
          <button className="btn btn-success">Cotizar</button>
          <div className="alert alert-danger">Can't load</div>
        </form>
      );
    }
    return (
      <form className="form w-50 d-flex flex-column justify-content-around px-5">
        <select className="form-control">
          <option value="divisas">Divisas</option>
          <option value="USD">Dolar Estadounidense</option>
          <option value="EUR">Euros</option>
          <option value="GBP">Libras</option>
          <option value="ARS">Peso Argentino</option>
          <option value="MXN">Peso Mexicano</option>
        </select>
        <select className="form-control">
          <option value="crypto">Cryptomonedas</option>
        </select>
        <button className="btn btn-success">Cotizar</button>
      </form>
    );
  }
}

export default Form;
