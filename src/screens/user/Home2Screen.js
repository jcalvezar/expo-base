import { StyleSheet, Text, View } from "react-native";
import React from "react";
import i18n from "../../localization/localization";

export default function Home2Screen() {
  return (
    <View>
      <Text>{i18n.t("home2.title")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
