<template>
  <div id="movieList">
    <div>
      <h3>{{ this.$store.state.loginUser }}{{ movieListTag }}</h3>
    </div>
    <div class="movie-list">
      <MovieListItem
        v-for="(movie, index) in movies"
        :key="index"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script>
import MovieListItem from "./MovieListItem";

export default {
  name: "MovieList",
  components: {
    MovieListItem,
  },
  data() {
    return {};
  },
  props: {
    movies: Array,
    movieListTag: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
a {
  color: #42b983;
}
h3 {
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 20px;
  text-align: start;
  color: white;
}
#movieList {
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px;
  margin-bottom: 50px;
  padding-bottom: 30px;
  width: 100%;
}
</style>
