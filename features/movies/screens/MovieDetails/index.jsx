import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";

export default function MovieDetails() {
  const route = useRoute();
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      
      <Image 
        source={{ uri: movie.img_capa }}
        style={styles.image}
      />

      <Text style={styles.title}>
        {movie.nome}
      </Text>

      <Text style={styles.year}>
        {movie.ano}
      </Text>

      <Text style={styles.description}>
        {movie.sinopse}
      </Text>

    </ScrollView>
  );
}