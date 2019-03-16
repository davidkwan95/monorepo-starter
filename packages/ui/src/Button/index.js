import React from "react";
import { Button as RNButton } from "react-native";

export class Button extends React.Component {
  render() {
    return <RNButton onPress={this.props.onPress} title={this.props.title} />;
  }
}
