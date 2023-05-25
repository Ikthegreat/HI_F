<template>
  <div id="card">
    <img class="card-img" :src="movieImgURL" @click="moveToDetail(movie.id)" />
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
      this.$router.push("/movie/" + movieId);
    },
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  },
  computed: {
    movieImgURL() {
      return this.getPosterURL(this.movie.poster_path);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-img {
  width: 300px;
  height: 450px;
  transition: transform 0.3s;
}
.card-img:hover {
  transform: translateZ(50px) scale(1.25);
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
h5 {
  color: black;
}
</style>
