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
        .get(this.store.api.uri + '/search/movie', {
          // in params posso mettere tanti parametri
          params: {
            // recupero la key e la query
            api_key: store.api.key,
            query: this.searchedTerm,
          },
        })
        .then((response) => {
          console.log(response.data);
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
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">Boolflix</a>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
              v-model="searchedTerm">
            <button class="btn btn-primary btn-outline-success" type="submit" @click="Search()">Search</button>
          </form>
        </div>
      </nav>
    </div>

  </header>
</template>

<!-- css -->
<style lang ="scss">
@use "./styles/general.scss";
</style>