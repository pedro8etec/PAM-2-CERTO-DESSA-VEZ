import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ROUTES } from "../../../../constants/routes";
import ActorCard from "../../components/ActorCard";
import styles from "./styles";
import { FlatList } from "react-native-web";

export default function MovieDetails() {
  const route = useRoute();
  const { movie } = route.params;
  const { elenco } = useElencoMovie(movie.id);
  return (
    <ScrollView style={styles.container}>

      <Image source={{ uri: movie.poster }} style={styles.image} />
      <Text style={styles.title}>{movie.nome}</Text>
      <Text style={styles.year}>{movie.ano}</Text>
      <Text style={styles.description}>{movie.sinopse}</Text>
      <Text style={styles.titleElenco}>Elenco</Text>

      <FlatList
        data={elenco}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ActorCard actor={item} />}
        />
    </ScrollView>
  );
}
