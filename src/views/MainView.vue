<template>
  <div class="main">
    <nav class="navbar w-100">
      <router-link :to="{ name: 'main' }">
        <img alt="sMovieR logo" src="../assets/logo.jpg" id="LOGO" />
      </router-link>
      <router-link :to="{ name: 'logout' }"> 로그아웃 </router-link>
    </nav>
    <h1>여기가 메인 화면입니다.</h1>
    <MovieList />

    <router-view />
  </div>
</template>

<script>
import MovieList from "@/components/MovieList";

export default {
  name: "MainView",
  components: {
    MovieList,
  },
  methods: {},
};
</script>

<style scoped>
.main {
  background-color: #1f1f1f;
  height: 100%;
}

.navbar {
  background-color: #161616;
}

#LOGO {
  width: 100px;
}
</style>