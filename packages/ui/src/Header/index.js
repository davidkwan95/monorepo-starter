import React from "react";
import "./index.css";
import logo from "./react.svg";

export class Header extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
    );
  }
}
