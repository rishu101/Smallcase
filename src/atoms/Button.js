import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Button = props => {
  const { title, onClick, style, isSelected } = props;
  const buttonColor = isSelected ? '#80cbc4' : '#eeeeee';
  return (
    <TouchableOpacity
      style={{ ...style, ...styles.button, backgroundColor: buttonColor }}
      onPress={onClick}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: 100,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Button;
