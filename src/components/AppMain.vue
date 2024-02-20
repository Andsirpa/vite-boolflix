<script>
// importo lo store
import { store } from "../store";

export default {
    data() {

        return {
            store,
        };
    },

    methods: {
        getFlag(langCode) {
            // guard close per rendere il codice più compatto
            if (langCode == 'it') return new URL('../assets/img/itflag.jpeg', import.meta.url).href;
            if (langCode == 'en') return new URL('../assets/img/engflag.png', import.meta.url).href;

            // se la lingua è diversa metto una bandiera bianca
            return new URL('../assets/img/whiteflag.jpeg', import.meta.url).href;

        },

    }
};
</script>

<template>
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
            <!-- aggiungo il poster e gli do la dimensione desiderata -->
            <li><img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt=""></li>
        </ul>

        <h2>Tv Series</h2>
        <!-- info che mi servono -->
        <ul v-for="tvSerie in store.tvSeries">
            <!-- prendo i nomi delle chiavi che voglio usare -->
            <li>titolo: {{ tvSerie.title }}</li>
            <li>titolo originale: {{ tvSerie.original_title }}</li>
            <li>lingua:
                <img :src="getFlag(tvSerie.language)" width="50">
            </li>
            <li>voto: {{ tvSerie.vote }}</li>
            <li><img :src="`https://image.tmdb.org/t/p/w342/${tvSerie.poster_path}`" alt=""></li>

        </ul>

    </div>
</template>