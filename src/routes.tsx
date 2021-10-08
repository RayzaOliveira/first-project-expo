import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Feed from "./screens/Feed";
import Perfil from "./screens/Perfil";
import Login from "./screens/Login";
import SplashScreen from "./screens/SplashScreen";

import { useAuth } from "./providers/AuthProvider/useAuth";

const Stack = createNativeStackNavigator();

export default function App() {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Feed" component={Feed} />
          <Stack.Screen name="Perfil" component={Perfil} />
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Sign in",
            // When logging out, a pop animation feels intuitive
            // You can remove this if you want the default 'push' animation
            animationTypeForReplace: !isAuthenticated ? "pop" : "push",
          }}
        />
      )}
    </Stack.Navigator>
  );
}
