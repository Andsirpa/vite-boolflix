<script>
export default {
    props: {

        production: Object,
    },

    methods: {
        getFlag(langCode) {
            // guard close per rendere il codice più compatto
            if (langCode == 'it') return new URL('../assets/img/itflag.jpeg', import.meta.url).href;
            if (langCode == 'en') return new URL('../assets/img/engflag.png', import.meta.url).href;

            // se la lingua è diversa metto una bandiera bianca
            return new URL('../assets/img/whiteflag.jpeg', import.meta.url).href;

        },

    },
};
</script>

<template>
    <ul>
        <!-- prendo i nomi delle chiavi che voglio usare -->
        <li>titolo: {{ production.title }}</li>
        <li>titolo originale: {{ production.original_title }}</li>
        <li>lingua:
            <img :src="getFlag(production.language)" width="50">
        </li>
        <li>voto: {{ production.vote }} <br>
            <!-- stampo le stelle in base al voto -->
            <font-awesome-icon v-for="star in 5"
                :icon="star <= production.vote ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
        </li>

        <!-- aggiungo il poster e gli do la dimensione desiderata -->
        <li><img :src="`https://image.tmdb.org/t/p/w342/${production.poster_path}`" alt=""></li>
    </ul>
</template>

<style lang="scss" scoped></style>