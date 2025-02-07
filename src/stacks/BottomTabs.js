import React from "react";
import { Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import HomeScreen from "../screens/user/HomeScreen";
import ProfileScreen from "../screens/user/Home2Screen";
import SettingsScreen from "../screens/user/Home3Screen";
import i18n from "../localization/localization";
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
        tabBarStyle: {
          //paddingBottom: 10, // Safe area padding + extra padding
          height: 70, // Adjust height to match padding
        },
      }}
    >
      <Tab.Screen
        name={i18n.t("home.title")}
        component={HomeScreen}
        options={{
          title: i18n.t("home.title"),
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={i18n.t("home2.title")}
        component={ProfileScreen}
        options={{
          title: i18n.t("home2.title"),
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={i18n.t("home3.title")}
        component={SettingsScreen}
        options={{
          title: i18n.t("home3.title"),
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
