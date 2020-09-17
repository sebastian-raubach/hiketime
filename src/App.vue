<template>
  <div>
    <b-navbar toggleable="lg" variant="primary" type="dark">
      <b-navbar-brand href="#">HikeTime</b-navbar-brand>

      <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
    </b-navbar>
    <b-container id="app">
      <router-view :key="$route.path" class="my-3" />
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
$primary: #44aa00;

@import '~bootswatch/dist/flatly/variables';
@import '~bootstrap/scss/bootstrap';
@import '~bootswatch/dist/flatly/bootswatch';
</style>
