<template>
  <div id="card">
    <!-- <b-card img-top> -->
    <img id="card-img" :src="movieImgURL" @click="moveToDetail(movie.id)" />
    <!-- </b-card> -->
  </div>
</template>

<script>
export default {
  name: "MovieListItem",
  props: {
    movie: Object,
  },
  data() {
    return {
      movieImgURL: "",
    };
  },
  methods: {
    moveToDetail(movieId) {
      this.$router.push("/movie/" + movieId);
    },
    getPosterURL(posterPath) {
      this.movieImgURL = `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  },
  created() {
    this.getPosterURL(this.movie.poster_path);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#card {
  width: 150px;
}

#card-img {
  width: 150px;
  height: 220px;
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
