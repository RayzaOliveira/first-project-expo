import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";
import { AuthProvider } from "./src/providers/AuthProvider/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}
