<template>
  <div class="start">
    <img alt="sMovieR logo" src="../assets/logo.jpg" class="pb-5" />

    <div class="grid">
      <vs-row justify="center">
        <router-link id="toLogin" :to="{ name: 'login' }">
          <vs-button success size="xl" flat :active="active == 1"
            >Log In</vs-button
          >
        </router-link>
        <router-link id="toSignUp" :to="{ name: 'signup' }">
          <vs-button success size="xl" :active="active == 1"
            >Get Started</vs-button
          >
        </router-link>
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#toLogin {
  text-decoration: none;
}
</style>