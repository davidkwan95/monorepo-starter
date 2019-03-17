import React from "react";
import { View, Text } from "react-native";
// import logo from "./react.svg";
import styles from "./styles.js";

export class Header extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        {/* <img src={logo} className="Home-logo" alt="logo" /> */}
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}
