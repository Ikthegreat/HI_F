<template>
  <div class="navbar">
    <b-navbar fixed="top">
      <b-navbar-nav id="toMain">
        <router-link :to="{ name: 'main' }"> sMovieR </router-link>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link :to="{ name: 'profile' }"> 프로필 </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="{ name: 'logout' }"> 로그아웃 </router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: #1f1f1f;
}
#toMain {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 30px;
  color: white;
}

#LOGO {
  height: 50px;
}
</style>
