import { StyleSheet, Text, View } from "react-native";
import React from "react";
import i18n from "../../localization/localization";

export default function HomeScreen() {
  return (
    <View>
      <Text>{i18n.t("home.title")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
