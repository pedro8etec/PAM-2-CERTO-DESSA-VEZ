import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  filmImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
    borderBottomWidth: 3,
    borderBottomColor: "#ff006e",
  },
  headerInfo: {
    padding: 16,
    backgroundColor: "#1a1a1a",
    borderBottomWidth: 2,
    borderBottomColor: "#00f5ff",
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#ff006e",
    marginBottom: 8,
    letterSpacing: 2,
  },
  year: {
    fontSize: 14,
    color: "#ffd700",
    fontWeight: "bold",
  },
  sinopseContainer: {
    padding: 16,
    backgroundColor: "#1a1a1a",
    marginTop: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#00f5ff",
  },
  sinopseTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#ffd700",
    marginBottom: 10,
  },
  sinopseText: {
    fontSize: 14,
    color: "#00f5ff",
    lineHeight: 22,
  },
  elencoContainer: {
    padding: 16,
    backgroundColor: "#1a1a1a",
    marginTop: 8,
    marginBottom: 20,
    borderLeftWidth: 3,
    borderLeftColor: "#ff006e",
  },
  elencoTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#ffd700",
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
