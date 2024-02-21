<script>
// importo lo store
import { store } from "../store";

// importo il componente AppCard
import AppCard from "./AppCard.vue";

export default {
    data() {

        return {
            store,
        };
    },

    components: { AppCard },
};
</script>

<template>
    <div class="container mt-5">

        <h2>Movies</h2>
        <app-card v-for="movie in store.movies" :production="movie" />

        <h2>tv Series</h2>
        <app-card v-for="tvSerie in store.tvSeries" :production="tvSerie" />

    </div>
</template>