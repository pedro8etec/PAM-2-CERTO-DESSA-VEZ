import { api } from "../../../services/api";

export async function getpopularMovies() {
    const response = await api.get("/movie/popular", {
      params: {
         language: "pt-BR",
         page: 1
         },
       });
 
    return response.data.results; 
  }