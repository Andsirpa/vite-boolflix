<script>
export default {
    data() {
        return {
            searchedTerm: ''
        };
    },
};
</script>

<template>
    <!-- creo la searchbar -->
    <div class="d-flex">
        <!-- qui uso l'emit per passare al genitore l'nformazione della ricerca -->
        <input class="form-control me-2" type="text" placeholder="Search" v-model="searchedTerm"
            @keyup.enter="$emit('search', this.searchedTerm)">
        <button class="btn btn-primary" @click="$emit('search', this.searchedTerm)">Search</button>

    </div>
</template>

<style lang="scss" scoped></style>