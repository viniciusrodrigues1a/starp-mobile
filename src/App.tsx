import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Routes } from "./routes";

import {
  useFonts,
  SpaceGrotesk_400Regular as spaceGrotesk400,
  SpaceGrotesk_700Bold as spaceGrotesk700,
  SpaceGrotesk_500Medium as spaceGrotesk500,
} from "@expo-google-fonts/space-grotesk";

export default function App() {
  const [fontsLoaded] = useFonts({
    spaceGrotesk400,
    spaceGrotesk700,
    spaceGrotesk500,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Routes />
    </SafeAreaView>
  );
}
