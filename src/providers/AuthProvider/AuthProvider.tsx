import React from "react";
import * as SecureStore from "expo-secure-store";

export type AuthContextType = {
  isLoading?: boolean;
  isAuthenticated?: boolean;
  signIn: () => void;
  signOut: () => void;
};

export const AuthContext = React.createContext<AuthContextType>({
  signIn: () => null,
  signOut: () => null,
});

type AuthState = {
  isLoading?: boolean;
  isAuthenticated?: boolean;
};

export const AuthProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<AuthState>({
    // SplashScreen: Tela que espera o carregamento
    isLoading: true,
    isAuthenticated: false,
  });

  React.useEffect(() => {
    // https://reactnavigation.org/docs/auth-flow/
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (error) {
        console.log("bootstrapAsync::", error);
      }

      if (!!userToken) {
        return setState({ isLoading: false, isAuthenticated: true });
      }

      setState({ isLoading: false, isAuthenticated: false });
    };

    bootstrapAsync();
  }, []);

  const signIn = async () => {
    try {
      await SecureStore.setItemAsync("userToken", "fake-token");
    } catch (error) {
      console.log("signIn::", error);
    }
    setState({ isLoading: false, isAuthenticated: true });
  };

  const signOut = async () => {
    try {
      await SecureStore.deleteItemAsync("userToken");
    } catch (error) {
      console.log("signIn::", error);
    }
    setState({ isLoading: false, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signOut,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
