import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();

  const handleButton = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: "Feed",
      })
    );
    // Modelo antigo:
    // navigation.navigate("Feed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{ color: "#FFF", marginBottom: 16 }}>Rayza</Text>
        <Image
          width={180}
          height={180}
          source={require("../../../assets/favicon.png")}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleButton}>
        <Text>Feed</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    height: 200,
    backgroundColor: "black",
    width: 200,
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
