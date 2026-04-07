import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";

export default function ActorDetails() {
  const route = useRoute();
  const { actor, movieName } = route.params;

  if (!actor) {
    return (
      <View style={styles.container}>
        <Text>Ator não encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Foto do Ator */}
      <Image
        source={{ uri: actor.imagem }}
        style={styles.actorImage}
      />

      {/* Nome do Ator */}
      <View style={styles.infoContainer}>
        <Text style={styles.actorNameTitle}>Nome</Text>
        <Text style={styles.actorName}>{actor.nome}</Text>
      </View>

      {/* Personagem */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Personagem</Text>
        <Text style={styles.characterInfo}>{actor.personagem}</Text>
      </View>

      {/* Filme */}
      {movieName && (
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Filme</Text>
          <Text style={styles.movieInfo}>{movieName}</Text>
        </View>
      )}
    </ScrollView>
  );
}
