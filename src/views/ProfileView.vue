<template>
  <div>
    <NavBar />
    <router-link :to="{ name: 'main' }">메인 화면으로</router-link>
    <h1>프로필입니다</h1>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "ProfileView",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
h1 {
  padding-top: 100px;
}
</style>