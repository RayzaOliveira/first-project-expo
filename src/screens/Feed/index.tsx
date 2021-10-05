import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Feed = () => {
  const navigation = useNavigation();

  const handleButton = () => {
    navigation.navigate("Perfil");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleButton}>
        <Text>Perfil</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "#FFF",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 32,
  },
});

export default Feed;
