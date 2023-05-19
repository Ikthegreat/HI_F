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
          <progress :value="movieData.vote_average" max="10"></progress>
          <h5>{{ movieData.vote_average }}</h5>
          <h6>{{ movieData.overview }}</h6>
        </b-col>
      </b-row>
    </b-container>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import axios from "axios";

const Server_URL = "http://127.0.0.1:8000";

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
    this.getMovieDetail();
  },
  methods: {
    getMovieDetail() {
      axios({
        method: "get",
        url: `${Server_URL}/main/${this.movieId}`,
      })
        .then((response) => {
          this.movieData = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  },
};
</script>

<style scoped>
h1 {
  padding-top: 100px;
}
</style>