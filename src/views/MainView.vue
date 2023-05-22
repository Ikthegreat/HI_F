<template>
  <div id="main">
    <NavBar />
    <div id="padding-scroll-content" class="square">
      <MovieList
        v-for="(value, index) in movies"
        :movieListTag="movieListTag[index]"
        :key="index"
        :movies="value"
      />
    </div>
  </div>
</template>

<script>
import MovieList from "@/components/MovieList";
import NavBar from "@/components/NavBar";

export default {
  name: "MainView",
  components: {
    MovieList,
    NavBar,
  },
  methods: {
    getMain() {
      this.$store.dispatch("getMain");
    },
  },
  created() {
    this.getMain();
  },
  data() {
    return {
      movies: this.$store.state.movies,
      movieListTag: ["UpComing", "NowPlaying"],
      active: "guide",
    };
  },
};
</script>

<style scoped>
#main {
  height: 100%;
}
</style>