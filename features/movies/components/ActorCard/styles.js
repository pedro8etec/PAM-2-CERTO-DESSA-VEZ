import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    borderRadius: 0,
    padding: 10,
    borderWidth: 2,
    borderColor: "#00f5ff",
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 0,
    marginBottom: 10,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "#ff006e",
  },
  actorName: {
    fontSize: 14,
    fontWeight: "900",
    color: "#ffd700",
    textAlign: "center",
    marginBottom: 4,
  },
  characterName: {
    fontSize: 12,
    color: "#00f5ff",
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
