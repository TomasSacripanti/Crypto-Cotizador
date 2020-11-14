import React, { Component } from "react";
import Loader from "./Loader";

export class Outcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.loading) {
      return (
        <div className="w-50 px-5">
          <Loader></Loader>
        </div>
      );
    }
    if (this.props.error) {
      return <div></div>;
    }
    return <div className="w-50 px-5"></div>;
  }
}

export default Outcome;
