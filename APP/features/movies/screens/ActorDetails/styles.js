import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingBottom: 20,
  },
  actorImage: {
    width: "100%",
    height: 450,
    resizeMode: "cover",
  },
  infoContainer: {
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 12,
    marginHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  actorNameTitle: {
    fontSize: 14,
    color: "#888",
    marginBottom: 6,
    fontWeight: "600",
  },
  actorName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  label: {
    fontSize: 14,
    color: "#888",
    marginBottom: 6,
    fontWeight: "600",
  },
  characterInfo: {
    fontSize: 18,
    color: "#333",
    fontWeight: "600",
  },
  movieInfo: {
    fontSize: 16,
    color: "#555",
    fontWeight: "500",
  },
});
