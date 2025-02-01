import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabs from "./BottomTabs";
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
        options={{ title: "Main" }}
      />
    </Drawer.Navigator>
  );
}
