<!-- js -->
<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/App.Header.vue";


export default {
  data() {
    return {
      store,
      // searchedTerm: '',

    };
  },

  components: { AppHeader },
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
              title: movie.title,
              original_title: movie.original_title,
              language: movie.original_language,
              vote: movie.vote_average,
            };
          });
        });

    },

    fetchTvSeries(searchedTerm) {
      axios
        .get(`${this.store.api.uri}/search/tv`, {
          // in params posso mettere tanti parametri
          params: {
            // recupero la key e la query
            api_key: store.api.key,
            query: searchedTerm,
          },
        })
        .then((response) => {
          // qui uso il destructuring, sintassi alternativa
          store.tvSeries = response.data.results.map((tvSerie) => {
            // prendo le proprietà dall'oggetto tvSerie..
            const { title, original_title, language, vote } = tvSerie;
            // ..e le assegno al nuovo oggetto che diventa l'elemento del nuovo array tvSeries messo in store
            return { title, original_title, language, vote };
          });
        });

    },

    Search(searchedTerm) {
      this.fetchMovies(searchedTerm);
      this.fetchTvSeries(searchedTerm);
    },



    // aggiungo le bandiere

    // getFlag(langCode) {
    //   // guard close per rendere il codice più compatto
    //   if (langCode == 'it') return new URL('./assets/img/itflag.jpeg', import.meta.url).href;
    //   if (langCode == 'en') return new URL('./assets/img/engflag.png', import.meta.url).href;

    //   // se la lingua è diversa metto una bandiera bianca
    //   return new URL('./assets/img/whiteflag.jpeg', import.meta.url).href;

    // },

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