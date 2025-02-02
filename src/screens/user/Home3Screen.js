import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Home3Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home3 Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
