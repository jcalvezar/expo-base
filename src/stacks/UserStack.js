import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabs from "./BottomTabs";
import ProfileScreen from "../screens/drawer/ProfileScreen";
import SettingsScreen from "../screens/drawer/SettingsScreen";
import CustomDrawerContent from "../components/CustomDrawerContent"; // Optional custom drawer

const Drawer = createDrawerNavigator();

export default function UserStack() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Main"
        component={BottomTabs}
        options={{ title: "Main", headerShown: false }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
    </Drawer.Navigator>
  );
}
