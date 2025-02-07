import { StyleSheet, Text, View } from "react-native";
import React from "react";
import i18n from "../../localization/localization";
const Home3Screen = () => {
  return (
    <View>
      <Text>{i18n.t("home3.title")}</Text>
    </View>
  );
};

export default Home3Screen;

const styles = StyleSheet.create({});
