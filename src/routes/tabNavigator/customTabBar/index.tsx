import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import HomeIcon from "../../../assets/home.png";
import FilledHomeIcon from "../../../assets/home-filled.png";
import SearchIcon from "../../../assets/search.png";
import FilledSearchIcon from "../../../assets/search-filled.png";
import LibraryIcon from "../../../assets/folder.png";
import FilledLibraryIcon from "../../../assets/folder-filled.png";
import ProfileIcon from "../../../assets/user.png";
import FilledProfileIcon from "../../../assets/user-filled.png";

import { styles } from "./styles";

const iconsByRouteIndex = [
  (isActive: boolean) => (isActive ? FilledHomeIcon : HomeIcon),
  (isActive: boolean) => (isActive ? FilledSearchIcon : SearchIcon),
  (isActive: boolean) => (isActive ? FilledLibraryIcon : LibraryIcon),
  (isActive: boolean) => (isActive ? FilledProfileIcon : ProfileIcon),
];

export function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 48,
        paddingVertical: 16,
        backgroundColor: "#242424",
      }}
    >
      {state.routes.map((route: any, index: any) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItemButton}
          >
            <Image
              style={styles.tabItemImage}
              source={iconsByRouteIndex[index](isFocused)}
            />
            <Text
              style={[
                styles.tabItemText,
                { color: isFocused ? "#fff" : "#767676" },
              ]}
            >
              {descriptors[route.key].options.tabBarLabel}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
