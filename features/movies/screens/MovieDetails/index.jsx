import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ROUTES } from "../../../../constants/routes";
import ActorCard from "../../components/ActorCard";
import styles from "./styles";

export default function MovieDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { movie } = route.params;

  if (!movie) {
    return (
      <View style={styles.container}>
        <Text>Filme não encontrado</Text>
      </View>
    );
  }

  // Pega os 2 primeiros atores (ou menos se nao tiver)
  const atoresExibidos = movie.elenco?.slice(0, 2) || [];

  return (
    <ScrollView style={styles.container}>
      {/* Imagem do Filme */}
      <Image
        source={{ uri: movie.img_capa }}
        style={styles.filmImage}
      />

      {/* Nome e Ano */}
      <View style={styles.headerInfo}>
        <Text style={styles.title}>{movie.nome}</Text>
        <Text style={styles.year}>{movie.ano}</Text>
      </View>

      {/* Sinopse */}
      <View style={styles.sinopseContainer}>
        <Text style={styles.sinopseTitle}>Sinopse</Text>
        <Text style={styles.sinopseText}>{movie.sinopse}</Text>
      </View>

      {/* Elenco */}
      <View style={styles.elencoContainer}>
        <Text style={styles.elencoTitle}>Elenco</Text>
        <View style={styles.actorsGrid}>
          {atoresExibidos.map((ator) => (
            <TouchableOpacity
              key={ator.id}
              onPress={() =>
                navigation.navigate(ROUTES.ACTOR_DETAILS, {
                  actor: ator,
                  movieName: movie.nome,
                })
              }
              style={styles.actorWrapper}
            >
              <ActorCard actor={ator} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
