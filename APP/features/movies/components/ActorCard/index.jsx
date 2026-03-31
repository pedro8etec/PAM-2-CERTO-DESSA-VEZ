import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function ActorCard({ actor }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: actor.imagem }}
        style={styles.image}
      />
      <Text style={styles.actorName}>{actor.nome}</Text>
      <Text style={styles.characterName}>{actor.personagem}</Text>
    </View>
  );
}