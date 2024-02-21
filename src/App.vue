<!-- js -->
<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/App.Header.vue";
import AppMain from "./components/AppMain.vue";


export default {
  data() {
    return {
      store,
      // searchedTerm: '',

    };
  },

  components: { AppHeader, AppMain },
  // creo il metodo per la ricerca
  methods: {

    fetchMovies(searchedTerm) {
      axios
        .get(`${this.store.api.uri}/search/movie`, {
          // in params posso mettere tanti parametri
          params: {
            // recupero la key e la query
            api_key: store.api.key,
            query: searchedTerm,
          },
        })
        .then((response) => {
          // uso il map per creare una copia con solo le informazioni che utilizzo
          store.movies = response.data.results.map((movie) => {
            return {
              // nel map posso modificare i nomi chiavi
              id: movie.id,
              title: movie.title,
              original_title: movie.original_title,
              language: movie.original_language,
              vote: Math.ceil(movie.vote_average / 2),
              poster_path: movie.poster_path,
            };
          });
        });

    },

    fetchTvSeries(searchedTerm) {
      axios
        .get(`${this.store.api.uri}/search/tv`, {

          params: {

            api_key: store.api.key,
            query: searchedTerm,
          },
        })
        .then((response) => {
          store.tvSeries = response.data.results.map((tvSerie) => {
            return {
              // nel map posso modificare i nomi chiavi
              id: tvSerie.id,
              title: tvSerie.title,
              original_title: tvSerie.original_title,
              language: tvSerie.original_language,
              vote: Math.ceil(tvSerie.vote_average / 2),
              poster_path: tvSerie.poster_path,
            };
          });

        });
    },

    Search(searchedTerm) {
      this.fetchMovies(searchedTerm);
      this.fetchTvSeries(searchedTerm);
    },

  },
};
</script>

<!-- html -->
<template>
  <div class="container mt-5">

    <app-header @search="Search" />
    <app-main />

  </div>
</template>

<!-- css -->
<style lang ="scss">
@use "./styles/general.scss";
</style>