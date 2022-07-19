import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#141414" },
  content: {
    height: "100%",
    justifyContent: "space-between",
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  markAsListened: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#767676",
    borderWidth: 1,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  markAsListenedText: {
    fontFamily: "spaceGrotesk400",
    color: "#FFFFFF",
    fontSize: 16,
    marginRight: 12,
  },
  main: {
    paddingVertical: 56,
    paddingHorizontal: 24,
    flex: 1,
  },
  footer: {},
  podcastInfo: {
    marginBottom: 32,
  },
  podcastInfoTitle: {
    fontFamily: "spaceGrotesk500",
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 12,
  },
  podcastInfoArtist: {
    fontFamily: "spaceGrotesk400",
    fontSize: 16,
    color: "#FFFFFF",
  },
  progressBar: {
    marginBottom: 32,
  },
  progressBarLabels: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressBarLabelText: {
    fontFamily: "spaceGrotesk500",
    fontSize: 12,
    color: "#FFFFFF",
  },
  controlButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  controlButtonImage: {
    width: 32,
    height: 32,
  },
  playButton: {
    padding: 24,
    backgroundColor: "#8338EC",
    borderRadius: 1000,
  },
});
