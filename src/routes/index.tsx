import React from "react";
import { View } from "react-native";

import { NavigationContainer, Theme } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import { Onboarding } from "../pages/onboarding";
import { TabNavigator } from "./tabNavigator";
import { Player } from "../pages/player";

export type RootStackParamList = {
  Dashboard: undefined;
  Onboarding: undefined;
  Player: undefined;
};

const AppStack = createStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer theme={{ colors: { background: "#141414" } } as Theme}>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Onboarding" component={Onboarding} />
        <AppStack.Screen name="Dashboard" component={TabNavigator} />
        <AppStack.Screen
          name="Player"
          component={Player}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
