import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text, Card } from "react-native-paper";

interface LoginComponentProps {
  onLogin: (email: string, password: string) => void;
  onSignUp: () => void;
  onPasswordRecovery: () => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({
  onLogin,
  onSignUp,
  onPasswordRecovery,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    onLogin(email, password);
    setTimeout(() => setIsLoading(false), 1000); // Simulate API call
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>
            Login
          </Text>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <Button
            mode="contained"
            onPress={handleLogin}
            loading={isLoading}
            style={styles.button}
          >
            Login
          </Button>
          <Button onPress={onPasswordRecovery} style={styles.link}>
            Forgot Password?
          </Button>
          <Button onPress={onSignUp} style={styles.link}>
            Create Account
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  card: {
    padding: 20,
    borderRadius: 10,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
  link: {
    marginTop: 10,
  },
});

export default LoginComponent;
