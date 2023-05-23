<template>
  <div>
    <NavBar />
    <b-container>
      <b-row id="movieinfo">
        <b-col>
          <img :src="getPosterURL(movieData.poster_path)" alt="" />
        </b-col>
        <b-col>
          <h3 id="title" class="mt-5 mb-3">
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
          <div>
            <div v-if="isLiked">
              <vs-button success @click="likeMovie">
                <i class="bx bxs-heart"></i>
              </vs-button>
            </div>
            <div v-else>
              <vs-button success @click="likeMovie">
                <i class="bx bx-heart"></i>
              </vs-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <!-- <div class="center con-avatars">
      <vs-avatar-group max="3">
        <div v-for="(user, index) in likedUser" :key="index">
          <vs-avatar>
            <img src="/avatars/avatar-1.png" alt="" />
          </vs-avatar>
        </div>
      </vs-avatar-group>
    </div> -->
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
      isLiked: false,
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
  },
  created() {
    this.getDetail();
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
          this.isLiked = response.data.is_liked;
        })
        .catch((error) => {
          console.error(error.response.data);
        });
    },
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  },
};
</script>

<style scoped>
img {
  width: 300px;
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
  align-items: center;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 3%;
}
#title {
  position: relative;
}
</style>
