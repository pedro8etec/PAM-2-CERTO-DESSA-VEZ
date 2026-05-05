import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    paddingBottom: 20,
  },
  actorImage: {
    width: "100%",
    height: 450,
    borderBottomWidth: 3,
    borderBottomColor: "#ff006e",
  },
  infoContainer: {
    backgroundColor: "#1a1a1a",
    padding: 16,
    marginTop: 12,
    marginHorizontal: 8,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: "#00f5ff",
  },
  actorNameTitle: {
    fontSize: 12,
    color: "#ffd700",
    marginBottom: 6,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  actorName: {
    fontSize: 28,
    fontWeight: "900",
    color: "#ff006e",
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: "#ffd700",
    marginBottom: 6,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  characterInfo: {
    fontSize: 18,
    color: "#00f5ff",
    fontWeight: "900",
    marginBottom: 12,
  },
  movieInfo: {
    fontSize: 16,
    color: "#ffd700",
    fontWeight: "bold",
  },
});
