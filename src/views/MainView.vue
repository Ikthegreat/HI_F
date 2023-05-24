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
      movieListTag: [
        "님만을 위한 추천 영화",
        "님!! 다른 분들이 좋아하시는 영화도 모아왔어요!",
        "님이 기대하실만한 영화",
        "님이 당장 보시기에 좋은 영화",
      ],
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