<template>
  <div class="start">
    <img alt="sMovieR logo" src="../assets/logo.jpg" class="pb-5" />
    <h1>이용해주셔서 감사합니다.</h1>
    <router-link :to="{ name: 'start' }">처음 화면으로</router-link>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "LogOutView",
  created() {
    this.$store.dispatch("logOut");
  },
};
</script>

<style scoped>
</style>