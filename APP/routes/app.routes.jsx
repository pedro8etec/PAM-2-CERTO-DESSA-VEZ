import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ROUTES } from "../constants/routes";

import { MovieList, MovieDetails, CreateMovie, ActorDetails } from "../features/movies";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#ff006e",
    background: "#1a1a1a",
    card: "#1a1a1a",
    text: "#ff006e",
    border: "#ff006e",
    notification: "#00f5ff",
  },
};

export default function AppRoutes() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator 
        initialRouteName={ROUTES.MOVIE_LIST}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1a1a1a",
          },
          headerTintColor: "#ff006e",
          headerTitleStyle: {
            color: "#ff006e",
            fontWeight: "900",
          },
          cardStyle: {
            backgroundColor: "#1a1a1a",
          },
          sceneContainerStyle: {
            backgroundColor: "#1a1a1a",
          },
        }}
      >
        
        <Stack.Screen
          name={ROUTES.MOVIE_LIST}
          component={MovieList}
          options={{ title: "Filmes" }}
        />

        <Stack.Screen
          name={ROUTES.MOVIE_DETAILS}
          component={MovieDetails}
          options={{ title: "Detalhes do Filme" }}
        />

        <Stack.Screen
          name={ROUTES.CREATE_MOVIE}
          component={CreateMovie}
          options={{ title: "Cadastrar Filme" }}
        />

        <Stack.Screen
          name={ROUTES.ACTOR_DETAILS}
          component={ActorDetails}
          options={{ title: "Detalhes do Ator" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

