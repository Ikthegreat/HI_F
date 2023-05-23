<template>
  <div class="logout">
    <h1>이용해주셔서 감사합니다.</h1>
    <router-link :to="{ name: 'start' }">처음 화면으로</router-link>
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
.logout {
  height: 1000px;
  justify-content: center;
  align-items: center;
}
</style>