import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import LoginComponent from "../../components/auth/LoginComponent";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Define the parameter list for the stack
type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
  PasswordRecovery: undefined;
};

// Define props for the screen
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const LoginScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { login } = useAuth();

  const onLogin: (email: string, password: string) => void = () => {
    login();
  };

  const onSignUp: () => void = () => {
    navigation.navigate("SignUp");
  };

  const onPasswordRecovery: () => void = () => {
    navigation.navigate("PasswordRecovery");
  };

  return (
    <LoginComponent
      onLogin={onLogin}
      onSignUp={onSignUp}
      onPasswordRecovery={onPasswordRecovery}
    />
  );
};

export default LoginScreen;
