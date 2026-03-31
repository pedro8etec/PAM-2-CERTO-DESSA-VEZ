import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: "cover",
  },
  actorName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 4,
  },
  characterName: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    fontStyle: "italic",
  },
});
