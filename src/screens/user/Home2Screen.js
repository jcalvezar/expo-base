import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Home2Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home 2</Text>
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
