import React from "react";
import { Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import HomeScreen from "../screens/user/HomeScreen";
import ProfileScreen from "../screens/user/Home2Screen";
import SettingsScreen from "../screens/user/Home3Screen";

const HeaderIcon = () => {
  const navigation = useNavigation();

  return (
    <Ionicons
      name="menu"
      size={24}
      color="black"
      style={{ marginLeft: 10, marginRight: 10 }}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  );
};

const Tab = createBottomTabNavigator();

export default function BottomTabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerLeft: HeaderIcon,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="Home 2"
        component={ProfileScreen}
        options={{ title: "Home 2" }}
      />
      <Tab.Screen
        name="Home 3"
        component={SettingsScreen}
        options={{ title: "Home 3" }}
      />
    </Tab.Navigator>
  );
}
