<template>
  <div>
    <NavBar />
    <div v-if="movieData">
      <b-container id="container">
        <div id="movieinfo">
          <div id="image">
            <img :src="getPosterURL(movieData.poster_path)" alt="" />
          </div>
          <div id="content">
            <h3 id="title" class="mb-3" style="width: 100%">
              {{ movieData.title }}
            </h3>
            <h6 style="width: 100%">{{ movieData.tagline }}</h6>
            <div style="display: flex; justify-content: center; width: 100%">
              <h5 v-for="text in movieData.genres" :key="text">
                [{{ text.name }}]
              </h5>
            </div>
            <h5
              v-if="movieData.release_date"
              style="width: 100%; align-self: start"
            >
              개봉일 : {{ movieData.release_date }}
            </h5>
            <div v-if="movieData.vote_average" style="width: 100%">
              <b-progress :max="max" height="2rem" class="w-100 mb-2">
                <b-progress-bar :value="value">
                  <span
                    >평점 : <strong>{{ value }} / {{ max }}</strong></span
                  >
                </b-progress-bar>
              </b-progress>
            </div>
            <h6 style="align-self: start">
              인기도 : {{ movieData.popularity }}
            </h6>
            <h6 v-if="movieData.overview">
              {{ movieData.overview }}
            </h6>
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
          </div>
        </div>
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
  justify-content: space-around;
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
  width: 48%;
  display: flex;
  flex-direction: column;
}
#image {
  height: 100%;
  width: 48%;
  align-self: center;
}
</style>
