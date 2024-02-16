<!-- js -->
<script>
export default {
  data() {
    return {

    };
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
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-primary btn-outline-success" type="submit">Search</button>
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