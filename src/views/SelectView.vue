<template>
  <div class="selectpage">
    <div id="select" v-if="selectedMovies.length < 3">
      <h3>본인 취향에 가까운 영화를 3가지 골라주세요</h3>
      <div>
        <table>
          <tr v-for="(item, index) in 4" :key="index">
            <td v-for="j in 5" :key="j">
              <div v-if="movieList[index * 5 + (j - 1)]" id="card">
                <img
                  @click="movieSelect(movieList[index * 5 + (j - 1)].id)"
                  :src="
                    getPosterURL(movieList[index * 5 + (j - 1)].poster_path)
                  "
                  alt=""
                  :class="{
                    selected: isMovieSelected(
                      movieList[index * 5 + (j - 1)].id
                    ),
                  }"
                  style="padding: 10px"
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
        width: 250px;
        height: 120px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      "
    >
      <h6 class="mb-3 mt-3">이대로 제출하시겠습니까?</h6>
      <div style="display: flex" class="mb-2">
        <vs-button id="button" dark @click="selectComplete">제출하기</vs-button>
        <vs-button id="button" dark @click="goBack">뒤로가기</vs-button>
      </div>
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
  color: white;
  font-weight: bolder;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 5px;
}
img {
  width: 130px;
  height: 170px;
}
.selected {
  border-style: solid;
  border-width: 2px;
  border-color: red;
}
</style>
