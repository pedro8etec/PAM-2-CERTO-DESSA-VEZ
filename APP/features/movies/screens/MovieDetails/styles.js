import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  filmImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  headerInfo: {
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  year: {
    fontSize: 14,
    color: "#666",
  },
  sinopseContainer: {
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 8,
  },
  sinopseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  sinopseText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 22,
  },
  elencoContainer: {
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 8,
    marginBottom: 20,
  },
  elencoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  actorsGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },
  actorWrapper: {
    flex: 1,
  },
});
