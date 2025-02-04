import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  card: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    height: 115,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  img: {
    height: 25,
    width: 25,
  },
  txt: {
    fontSize: 25,
  },
});

export { s };
