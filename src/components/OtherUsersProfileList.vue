<template>
  <div>
    <h1>{{ movieListTag }}</h1>
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
import OtherUsersProfile from "./OtherUsersProfile";

export default {
  name: "OtherUsersProfileList",
  components: {
    OtherUsersProfile,
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
