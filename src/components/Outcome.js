import React, { Component } from "react";
import Loader from "./Loader";
import Success from './Success';

export class Outcome extends Component {
  render() {
    if (this.props.loading) {
      return (
        <div className="w-50 px-5">
          <Loader></Loader>
        </div>
      );
    }
    if (this.props.error) {
      return <div className="w-50 alert alert-warning">
        <p>Las cosas no sucedieron de manera esperada</p>
      </div>;
    }
    if (this.props.data) {
      return <div className="w-50 container">
        <Success data={this.props.data}></Success>
      </div>;
    }
    return <div className="w-50 px-5"></div>;
  }
}

export default Outcome;
