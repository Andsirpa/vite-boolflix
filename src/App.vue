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

  components: { AppHeader }
  // creo il metodo per la ricerca
  methods: {

    fetchMovies() {
      axios
        .get(`${this.store.api.uri}/search/movie`, {
          // in params posso mettere tanti parametri
          params: {
            // recupero la key e la query
            api_key: store.api.key,
            query: this.searchedTerm,
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

    fetchTvSeries() {
      axios
        .get(`${this.store.api.uri}/search/tv`, {
          // in params posso mettere tanti parametri
          params: {
            // recupero la key e la query
            api_key: store.api.key,
            query: this.searchedTerm,
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

    Search() {
      this.fetchMovies();
      this.fetchTvSeries();
    },



    // aggiungo le bandiere

    getFlag(langCode) {
      // guard close per rendere il codice più compatto
      if (langCode == 'it') return new URL('./assets/img/itflag.jpeg', import.meta.url).href;
      if (langCode == 'en') return new URL('./assets/img/engflag.png', import.meta.url).href;

      // se la lingua è diversa metto una bandiera bianca
      return new URL('./assets/img/whiteflag.jpeg', import.meta.url).href;

    },

  },
};
</script>

<!-- html -->
<template>
  <header>
    <div class="container mt-5">
      <!-- uso il componente AppHeader -->
      <app-header />

      <div class="container mt-5">

        <h2>Movies</h2>
        <!-- info che mi servono -->
        <ul v-for="movie in store.movies">
          <!-- prendo i nomi delle chiavi che voglio usare -->
          <li>titolo: {{ movie.title }}</li>
          <li>titolo originale: {{ movie.original_title }}</li>
          <li>lingua:
            <img :src="getFlag(movie.language)" width="50">
          </li>
          <li>voto: {{ movie.vote }}</li>
        </ul>

        <h2>Tv Setries</h2>
        <!-- info che mi servono -->
        <ul v-for="tvSerie in store.tvSeries">
          <!-- prendo i nomi delle chiavi che voglio usare -->
          <li>titolo: {{ tvSerie.title }}</li>
          <li>titolo originale: {{ tvSerie.original_title }}</li>
          <li>lingua:
            <img :src="getFlag(tvSerie.language)" width="50">
          </li>
          <li>voto: {{ tvSerie.vote }}</li>
        </ul>

      </div>

    </div>

  </header>
</template>

<!-- css -->
<style lang ="scss">
@use "./styles/general.scss";
</style>