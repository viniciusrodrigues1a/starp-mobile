import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, ImageProps, Text, StyleSheet } from "react-native";
import { Home } from "../../pages/home";

import HomeIcon from "../../../assets/home.png";
import FilledHomeIcon from "../../../assets/home-filled.png";

type GetCurrentIconProps = {
  filledIcon: ImageProps;
  icon: ImageProps;
  currentState: boolean;
};

function GetCurrentIcon({
  filledIcon,
  icon,
  currentState,
}: GetCurrentIconProps) {
  return <Image source={currentState ? filledIcon : icon} />;
}
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: "#242424",
    borderTopWidth: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  itemBarStyle: {},
  itemLabelStyle: {
    color: "white",
    marginTop: 8,
  },
});

export function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={styles.barStyle}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.barStyle,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <GetCurrentIcon
              currentState={focused}
              icon={HomeIcon}
              filledIcon={FilledHomeIcon}
            />
          ),
          tabBarItemStyle: styles.itemBarStyle,
          tabBarLabelStyle: styles.itemLabelStyle,
          tabBarLabel: "Inicio",
        }}
      />

      <Tab.Screen
        name="Explorar"
        component={() => <Text>Search page</Text>}
        options={{
          tabBarIcon: ({ focused }) => (
            <GetCurrentIcon
              currentState={focused}
              icon={HomeIcon}
              filledIcon={FilledHomeIcon}
            />
          ),
          tabBarLabel: "Explorar",
        }}
      />
    </Tab.Navigator>
  );
}
