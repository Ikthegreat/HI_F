<template>
  <div id="main">
    <NavBar />
    <div>
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
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
  data() {
    return {
      movieListTag: [
        "님만을 위한 추천 영화",
        "님!! 다른 분들이 좋아하시는 영화도 모아왔어요!",
        "님이 기대하실만한 영화",
        "님이 당장 보시기에 좋은 영화",
      ],
      active: "guide",
      percent: 0,
    };
  },
};
</script>

<style scoped>
#main {
  padding-top: 70px;
  height: 100%;
  width: 90%;
}
</style>
