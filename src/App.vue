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
    Search() {
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
          store.movies = response.data.results;

        });
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
          <!-- prendo i nomi delle chiavi che voglio -->
          <li>titolo: {{ movie.title }}</li>
          <li>titolo originale: {{ movie.original_title }}</li>
          <li>lingua: {{ movie.original_language }}</li>
          <li>voto: {{ movie.vote_average }}</li>
        </ul>
      </div>

    </div>

  </header>
</template>

<!-- css -->
<style lang ="scss">
@use "./styles/general.scss";
</style>