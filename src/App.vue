<!-- js -->
<script>
import axios from "axios";
import { store } from "./store";

export default {
  data() {
    return {
      store,
      searchedTerm: '',

    };
  },

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

  }
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
      <!-- creo la searchbar -->
      <div class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search" v-model="searchedTerm" @keyup.enter="Search()">
        <button class="btn btn-primary" @click="Search()">Search</button>

      </div>



      <div class="container mt-5">
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
      </div>

    </div>

  </header>
</template>

<!-- css -->
<style lang ="scss">
@use "./styles/general.scss";
</style>