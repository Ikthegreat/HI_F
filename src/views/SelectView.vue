<template>
  <div class="selectpage">
    <div id="select" v-if="selectedMovies.length < 3">
      <h3>본인 취향에 가까운 영화를 3가지 골라주세요</h3>
      <div>
        <table>
          <tr
            v-for="(item, index) in Math.ceil(movieList.length / 4)"
            :key="index"
          >
            <td v-for="j in 4" :key="j">
              <div v-if="movieList[index * 4 + (j - 1)]" id="card">
                <img
                  @click="movieSelect(movieList[index * 4 + (j - 1)].id)"
                  :src="
                    getPosterURL(movieList[index * 4 + (j - 1)].poster_path)
                  "
                  alt=""
                  :class="{
                    selected: isMovieSelected(
                      movieList[index * 4 + (j - 1)].id
                    ),
                  }"
                />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div
      v-else
      style="
        display: flex;
        background-color: rgba(255, 255, 255, 0.5);
        width: 280px;
        height: 150px;
        justify-content: center;
        align-items: center;
        border-radius: 10%;
      "
    >
      <vs-button id="button" success @click="selectComplete"
        >제출하기</vs-button
      >
      <vs-button id="button" success @click="goBack">뒤로가기</vs-button>
    </div>
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
          this.movieList = response.data;
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
#select {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 3%;
  width: 700px;
}
h3 {
  color: #46c93a;
  font-weight: bolder;
  background-color: white;
}
img {
  width: 120px;
  height: 160px;
}
.selected {
  border-style: dashed;
  border-width: 3px;
  border-color: #46c93a;
}
#button {
  width: 100px;
  height: 60px;
}
</style>
