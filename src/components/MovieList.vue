<template>
  <div>
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
import data from "../../../final-pjt-back/movies/movies_data2.json";
import MovieListItem from "./MovieListItem";

export default {
  name: "MovieList",
  components: {
    MovieListItem,
  },
  data() {
    return {
      movies: data,
    };
  },
  props: {
    msg: String,
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
