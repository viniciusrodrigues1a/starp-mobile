import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";

// @ts-ignore
import Logo from "../../../assets/logo.png";
// @ts-ignore
import Bell from "../../../assets/bell.png";
// @ts-ignore
import ArrowRight from "../../../assets/arrow-right.png";

import { MostListenedPodcast } from "../../components/mostListenedPodcast";

export function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.headerViewFlex}>
          <Image source={Logo} />
          <Image source={Bell} />
        </View>

        <Text style={styles.headerViewTitle}>
          Olá, <Text style={styles.headerViewTitleSpan}>Jonas</Text>
        </Text>
        <Text style={styles.headerViewSubtitle}>
          O que deseja escutar hoje?
        </Text>
      </View>

      <View style={styles.mostListenedView}>
        <View style={styles.mostListenedViewFlex}>
          <Text style={styles.mostListenedViewTitle}>Em alta</Text>
          <View style={styles.seeMoreView}>
            <Text style={styles.seeMoreText}>ver todos</Text>
            <Image source={ArrowRight} />
          </View>
        </View>

        <FlatList
          horizontal={true}
          data={[
            {
              id: "0",
              title: "LUCAS INUTILISMO - Podpah #404",
              artist: "Flow Podcast",
              length: "1:24h",
              timesListened: "407K",
              timesStarred: "65K",
            },
            {
              id: "1",
              title: "LUCAS INUTILISMO - Podpah #404",
              artist: "Flow Podcast",
              length: "1:24h",
              timesListened: "407K",
              timesStarred: "65K",
            },
          ]}
          renderItem={({ item }) => (
            <MostListenedPodcast
              artist={item.artist}
              length={item.length}
              timesListened={item.timesListened}
              timesStarred={item.timesStarred}
              title={item.title}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#141414" },
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
  mostListenedView: {
    paddingLeft: 24,
    paddingVertical: 48,
  },
  mostListenedViewFlex: {
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mostListenedViewTitle: {
    color: "#FFFFFF",
    fontFamily: "spaceGrotesk500",
    fontSize: 20,
  },
  seeMoreView: {
    paddingRight: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  seeMoreText: {
    color: "#767676",
    fontFamily: "spaceGrotesk500",
    fontSize: 16,
  },
  separator: {
    width: 24,
  },
});
