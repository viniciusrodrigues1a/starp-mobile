import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../pages/home";
import { Onboarding } from "../pages/onboarding";

export type RootStackParamList = {
  Home: undefined;
  Onboarding: undefined;
};

const AppStack = createStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Onboarding" component={Onboarding} />
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
