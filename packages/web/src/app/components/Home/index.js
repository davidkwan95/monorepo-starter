import React from "react";
import { Header } from "@mono/ui";

import "./index.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Header title="Welcome to Razzle" />
        <p className="Home-intro">
          To get started, edit <code>src/app/component/App/index.js</code> or{" "}
          <code>src/app/component/App/index.js</code> and save to reload.
        </p>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
