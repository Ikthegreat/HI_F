<template>
  <div class="start">
    <img alt="sMovieR logo" src="../assets/logo.jpg" class="pb-5" />

    <div>
      <router-link :to="{ name: 'login' }">Login</router-link> |
      <router-link :to="{ name: 'signup' }">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>