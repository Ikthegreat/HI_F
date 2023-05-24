<template>
  <div id="movieList">
    <h3>{{ movieListTag }}</h3>
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
  margin-bottom: 10px;
  text-align: start;
  font-weight: bold;
  color: black;
}
#movieList {
  background-color: white;
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 3%;
}
</style>
