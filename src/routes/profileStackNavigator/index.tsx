import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Profile } from "../../pages/profile";
import { EditProfile } from "../../pages/editProfile";
import { EditEmail } from "../../pages/editEmail";

export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
  EditEmail: undefined;
};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

export function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
      <ProfileStack.Screen name="EditEmail" component={EditEmail} />
    </ProfileStack.Navigator>
  );
}
