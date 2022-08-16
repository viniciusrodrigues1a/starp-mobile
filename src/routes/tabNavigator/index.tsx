import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../pages/home";
import { ProfileStackNavigator } from "../profileStackNavigator";

import { CustomTabBar } from "./customTabBar";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={CustomTabBar}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "Início" }}
      />
      <Tab.Screen
        name="Search"
        component={() => {}}
        options={{ tabBarLabel: "Explorar" }}
      />
      <Tab.Screen
        name="Library"
        component={() => {}}
        options={{ tabBarLabel: "Biblioteca" }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackNavigator}
        options={{ tabBarLabel: "Perfil" }}
      />
    </Tab.Navigator>
  );
}
