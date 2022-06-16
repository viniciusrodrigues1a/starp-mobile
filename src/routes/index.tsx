import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Onboarding } from "../pages/onboarding";
import { TabNavigator } from "./tabNavigator";

export type RootStackParamList = {
  Dashboard: undefined;
  Onboarding: undefined;
};

const AppStack = createStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name="Onboarding" component={Onboarding} />
          <AppStack.Screen name="Dashboard" component={TabNavigator} />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
}
