import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// @ts-ignore
import Logo from "../../../assets/logo.png";
// @ts-ignore
import Bell from "../../../assets/bell.png";

export function Home() {
  return (
    <View style={styles.headerView}>
      <View style={styles.headerViewFlex}>
        <Image source={Logo} />
        <Image source={Bell} />
      </View>

      <Text style={styles.headerViewTitle}>
        Olá, <Text style={styles.headerViewTitleSpan}>Jonas</Text>
      </Text>
      <Text style={styles.headerViewSubtitle}>O que deseja escutar hoje?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    paddingHorizontal: 24,
    paddingVertical: 48,
    backgroundColor: "#1C1C1C",
  },
  headerViewFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerViewTitle: {
    marginTop: 48,
    color: "#FFF",
    fontFamily: "spaceGrotesk500",
    fontSize: 20,
  },
  headerViewTitleSpan: {
    color: "#8338EC",
    fontFamily: "spaceGrotesk500",
    fontSize: 20,
  },
  headerViewSubtitle: {
    marginTop: 8,
    color: "#767676",
    fontFamily: "spaceGrotesk500",
    fontSize: 18,
  },
});
