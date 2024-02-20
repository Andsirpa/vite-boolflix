import { reactive } from "vue";

export const store = reactive({
    // raggruppi le api in un unico oggetto
    api: {
        uri: 'https://api.themoviedb.org/3/',
        // salvo la mia chiave
        key: 'db0595e17eecf660fba86c3530dedbff',
    },

    movies: [],

});