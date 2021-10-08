import React from "react";
import { View, StyleSheet } from "react-native";

import Button from "../../components/Button";
import { useAuth } from "../../providers/AuthProvider/useAuth";

const Login = () => {
  const { signIn } = useAuth();

  const handleLogin = () => {
    signIn();
  };

  return (
    <View style={styles.container}>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
