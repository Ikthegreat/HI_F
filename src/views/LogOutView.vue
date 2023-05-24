<template>
  <div class="logout">
    <!-- <h1>이용해주셔서 감사합니다.</h1> -->
    <router-link id="link" :to="{ name: 'start' }">처음 화면으로</router-link>
  </div>
</template>

<script>
export default {
  name: "LogOutView",
  created() {
    this.$store.dispatch("logOut").then(() => {
      this.$router.push("/start");
    });
  },
};
</script>

<style scoped>
.logout {
  width: 500px;
  height: 300px;
  color: white;
}
#link {
  text-decoration: none;
  color: white;
}
</style>
