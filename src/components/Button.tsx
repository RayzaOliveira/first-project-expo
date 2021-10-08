import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFF",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 32,
  },
});

export default Button;
