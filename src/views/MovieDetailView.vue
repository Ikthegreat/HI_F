<template>
  <div>
    <NavBar />
    <h1>
      {{ movieData.title }}
    </h1>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import axios from "axios";

export default {
  name: "MovieDetailView",
  components: {
    NavBar,
  },
  data() {
    return {
      movieId: null,
      movieData: "",
    };
  },
  mounted() {
    this.movieId = this.$route.params.movieid;
    this.fetchMovieData();
  },
  methods: {
    fetchMovieData() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzQyNzExMDBjM2FjZGYyOTAxYTkxMjhiYjY4NzMwNiIsInN1YiI6IjYzZDIwNWMwNjZhZTRkMDA4YzkyMjMwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YcFHsAOJFOrOfOc0gBh22Q8y2_PaJOT3LCnLb0yerjc",
        },
      };
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.movieId}?language=ko`,
          options
        )
        .then((response) => {
          this.movieData = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  padding-top: 100px;
}
</style>