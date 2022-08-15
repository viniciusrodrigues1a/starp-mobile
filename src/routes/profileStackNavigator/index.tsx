import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Profile } from "../../pages/profile";

export type ProfileStackParamList = {
  Profile: undefined;
};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

export function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}
