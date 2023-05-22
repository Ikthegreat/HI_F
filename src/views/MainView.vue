<template>
  <div id="main">
    <NavBar />
    <MovieList
      v-for="(value, index) in movies"
      :movieListTag="movieListTag[index]"
      :key="index"
      :movies="value"
    />
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
    };
  },
};
</script>

<style scoped>
#main {
  background-color: #1f1f1f;
  height: 100%;
}
</style>