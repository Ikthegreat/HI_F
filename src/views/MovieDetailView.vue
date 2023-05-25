<template>
  <div>
    <NavBar />
    <div v-if="movieData">
      <b-container id="container">
        <b-row id="movieinfo">
          <b-col :w="6">
            <img :src="getPosterURL(movieData.poster_path)" alt="" />
          </b-col>
          <b-col id="content">
            <h3 id="title" class="mb-3">
              {{ movieData.title }}
            </h3>
            <h5 v-if="movieData.released_date">
              개봉일 : {{ movieData.released_date }}
            </h5>
            <div v-if="movieData.vote_average">
              <b-progress :max="max" height="2rem" class="w-100 mb-2">
                <b-progress-bar :value="value">
                  <span
                    >평점 : <strong>{{ value }} / {{ max }}</strong></span
                  >
                </b-progress-bar>
              </b-progress>
            </div>
            <h6 v-if="movieData.overview">{{ movieData.overview }}</h6>
            <h6 v-else>등록된 줄거리가 없습니다</h6>

            <div class="mb-2" style="display: flex; justify-content: flex-end">
              <vs-button
                style="width: 50px; height: 50px"
                danger
                @click="likeMovie"
              >
                <i
                  class="bx"
                  :class="{
                    'bxs-heart': isLiked,
                    'bx-heart': !isLiked,
                  }"
                ></i>
              </vs-button>
            </div>
            <div
              class="center con-avatars"
              style="display: flex; justify-content: flex-end"
            >
              <vs-avatar-group max="3">
                <div v-for="(likeUser, index) in likeUsers" :key="index">
                  <vs-avatar>
                    <img
                      v-if="likeUsersProfile(index)"
                      style="width: 100%; height: 100%"
                      :src="profileImageURL(likeUsersProfile(index))"
                      alt=""
                    />
                    <i v-else class="bx bx-user"></i>
                  </vs-avatar>
                </div>
              </vs-avatar-group>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import axios from "axios";

const Server_URL = "http://127.0.0.1:8000";

export default {
  name: "MovieDetailView",
  components: {
    NavBar,
  },
  data() {
    return {
      max: 10,
    };
  },
  computed: {
    movieData() {
      return this.$store.state.movieData;
    },
    movieId() {
      return this.$route.params.movieid;
    },
    value() {
      return this.$store.state.movieData.vote_average;
    },
    likeUsers() {
      return this.$store.state.userWhoLikeThis;
    },
    isLiked() {
      if (
        this.$store.state.userWhoLikeThis.some(
          (item) => item.username === this.$store.state.loginUser
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.clearData();
    this.getDetail();
    console.log(Object.keys(this.$store.state.userWhoLikeThis[0])[0]);
    console.log(typeof this.$store.state.loginUser);
  },
  methods: {
    getDetail() {
      this.$store.dispatch("getDetail", this.movieId);
    },
    likeMovie() {
      const options = {
        method: "POST",
        url: `${Server_URL}/main/${this.movieId}/like/`,
        headers: {
          Authorization: `Token ${this.$store.state.token}`,
        },
      };
      axios
        .request(options)
        .then((response) => {
          console.log(response.data.is_liked);
          this.getDetail();
        })
        .catch((error) => {
          console.error(error.response.data);
        });
    },
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
    clearData() {
      this.$store.dispatch("clearData");
    },
    likeUsersProfile(index) {
      return this.$store.state.userWhoLikeThis[index].profileimage;
    },
    profileImageURL(context) {
      return `${Server_URL}${context}`;
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}
progress {
  width: 80px;
}
i {
  font-size: 25px;
}
#movieinfo {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.4);
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 3%;
  height: 100%;
  max-height: 800px;
}
#title {
  position: relative;
}
#content {
  height: 100%;
}
</style>


// 디테일 페이지를 들어가요
// 우리 db를 건드는게 우선은 맞아요
// 디테일 페이지에서 user 와의 reation이 존재하기 때문
// - 우리 dgb에 있다? 문제 없음 
//   like부분을 response에 담아서 줘야해요 (나의 좋아요 여부 + 영화를 좋아한 사람들 리스트)
// - 우리 db에 없다?
//   영화 뭉탱이를 ㅇ우리 db에 넣을떼 사용한 로직이 있잖아요
//   그걸 tmdb에 요청을 한번 보내서 우리 db에 넣고


// if 우리 디비에 없어:
//   영화를 tmbd에서 우리 db로 저장 한 다음
  
// 영화 보여줘


// 우리 디비에 없어요
// 내가 좋아요를 눌렀을리가 없잖아요
// IS LIKED가 FALSUE인 상태인거죠
