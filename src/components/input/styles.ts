import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerView: {
    width: "100%",
  },
  labelText: {
    fontFamily: "spaceGrotesk500",
    fontSize: 16,
    color: "#FFFFFF",
  },
  inputView: {
    width: "100%",
    position: "relative",
    marginTop: 12,
  },
  image: {
    width: 20,
    height: 20,
    position: "absolute",
    zIndex: 1,
    top: "50%",
    marginTop: -10,
    left: 16,
  },
  input: {
    backgroundColor: "#242424",
    borderRadius: 10,
    fontFamily: "spaceGrotesk400",
    fontSize: 16,
    color: "#FFFFFF",
    paddingLeft: 46,
  },
});
