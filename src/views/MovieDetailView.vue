<template>
  <div>
    <NavBar />
    <b-container>
      <b-row>
        <b-col>
          <img :src="getPosterURL(movieData.poster_path)" alt="" />
        </b-col>
        <b-col>
          <h1>
            {{ movieData.title }}
          </h1>
          <h3>{{ movieData.released_date }}</h3>
          <h5>평점 : {{ movieData.vote_average }}</h5>
          <progress :value="movieData.vote_average" max="10"></progress>
          <h6 v-if="movieData.overview">{{ movieData.overview }}</h6>
          <h6 v-else>등록된 줄거리가 없습니다</h6>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
// import axios from "axios";

// const Server_URL = "http://127.0.0.1:8000";

export default {
  name: "MovieDetailView",
  components: {
    NavBar,
  },
  data() {
    return {
      // movieId: this.$route.params.movieId,
    };
  },
  computed: {
    movieData() {
      return this.$store.state.movieData;
    },
    movieId() {
      return this.$route.params.movieid;
    },
  },
  created() {
    this.getDetail();
    // this.movieId = this.$route.params.movieid;
    // this.getMovieDetail();
  },
  methods: {
    getDetail() {
      this.$store.dispatch("getDetail", this.movieId);
    },
    // getMovieDetail() {
    //   const options = {
    //     method: "GET",
    //     headers: {
    //       accept: "application/json",
    //       Authorization:
    //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzQyNzExMDBjM2FjZGYyOTAxYTkxMjhiYjY4NzMwNiIsInN1YiI6IjYzZDIwNWMwNjZhZTRkMDA4YzkyMjMwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YcFHsAOJFOrOfOc0gBh22Q8y2_PaJOT3LCnLb0yerjc",
    //     },
    //   };
    //   axios
    //     .get(
    //       `https://api.themoviedb.org/3/movie/${this.movieId}?language=ko`,
    //       options
    //     )
    //     .then((response) => {
    //       this.movieData = response.data;
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  },
};
</script>

<style scoped>
</style>