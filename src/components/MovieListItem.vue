<template>
  <div id="card">
    <b-card img-top>
      <b-card-img
        id="card-img"
        :src="getPosterURL(movie.poster_path)"
        @click="moveToDetail(movie.id)"
      />
    </b-card>
  </div>
</template>

<script>
export default {
  name: "MovieListItem",
  props: {
    movie: Object,
  },
  data() {
    return {};
  },
  methods: {
    moveToDetail(movieId) {
      this.$router.push("/" + movieId);
    },
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#card {
  width: 150px;
}

#card-img {
  height: 100%;
  object-fit: contain;
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
