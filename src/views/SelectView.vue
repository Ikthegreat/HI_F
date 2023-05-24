<template>
  <div id="select" v-if="selectedMovies.length < 3">
    <h3>본인 취향에 가까운 영화를 3가지 골라주세요</h3>
    <div>
      <div id="card" v-for="movie in movieList" :key="movie.id">
        <img
          @click="movieSelect(movie.id)"
          :src="getPosterURL(movie.poster_path)"
          alt=""
          :class="{ selected: isMovieSelected(movie.id) }"
        />
      </div>
    </div>
  </div>
  <div v-else style="display: flex">
    <vs-row :w="12">
      <vs-col :w="2" :offset="5">
        <vs-button success @click="selectComplete">제출하기</vs-button>
        <vs-button border success @click="goBack">뒤로가기</vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import axios from "axios";

const Server_URL = "http://127.0.0.1:8000";

export default {
  name: "SelectView",
  components: {},
  data() {
    return {
      movie: "",
      selectList: [],
      movieList: [],
      selectedMovies: [],
    };
  },
  methods: {
    getSelectList() {
      axios({
        method: "get",
        url: `${Server_URL}/select/`,
      })
        .then((response) => {
          for (let i = 0; i < response.data.length; i++) {
            this.movieList.push(response.data[i]);
          }
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
    movieSelect(select) {
      const index = this.selectedMovies.indexOf(select);
      if (index > -1) {
        // 이미 선택된 영화인 경우 배열에서 제거
        this.selectedMovies.splice(index, 1);
      } else {
        // 선택되지 않은 영화인 경우 배열에 추가
        this.selectedMovies.push(select);
      }
    },
    selectComplete() {
      console.log(this.selectedMovies);
      axios({
        method: "post",
        url: `${Server_URL}/select/`,
        data: {
          movie_id: this.selectedMovies,
        },
        headers: {
          Authorization: `Token ${this.$store.state.token}`,
        },
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response.data);
          this.$router.push("/");
        });
    },
    goBack() {
      this.$router.go(0);
    },
    isMovieSelected(select) {
      return this.selectedMovies.includes(select);
    },
  },
  created() {
    this.getSelectList();
  },
};
</script>

<style scoped>
h3 {
  color: #46c93a;
}
img {
  width: 150px;
  height: 220px;
}
.selected {
  border-style: dashed;
  border-width: 3px;
  border-color: #46c93a;
}
</style>