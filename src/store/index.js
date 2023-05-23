import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
import router from "@/router";

const Server_URL = "http://127.0.0.1:8000";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    token: null,
    movies: [],
    movieData: null,
    loginUser: "",
    profileData: null,
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false;
    },
  },
  mutations: {
    LOG_IN(state, { token, username }) {
      state.token = token;
      state.loginUser = username;
    },
    LOG_OUT(state) {
      state.token = null;
      state.loginUser = "";
    },
    GET_MAIN(state, movies) {
      state.movies = movies;
    },
    GET_DETAIL(state, data) {
      state.movieData = data;
    },
    GET_PROFILE(state, data) {
      state.profileData = data;
    },
  },
  actions: {
    signUp(context, payload) {
      const userid = payload.userid;
      const username = payload.username;
      const password1 = payload.password1;
      const password2 = payload.password2;
      // const profileimage = payload.profileimage

      axios({
        method: "post",
        url: `${Server_URL}/accounts/signup/`,
        data: {
          userid,
          username,
          password1,
          password2,
        },
      })
        .then((result) => {
          context.commit("LOG_IN", {
            token: result.data.key,
            username: userid,
          });
          router.push("/select");
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
    logIn(context, payload) {
      const username = payload.userid;
      const password = payload.password;
      axios({
        method: "POST",
        url: `${Server_URL}/accounts/login/`,
        data: {
          username,
          password,
        },
      })
        .then((result) => {
          context.commit("LOG_IN", {
            token: result.data.key,
            username: username,
          });
          router.push("/");
          router.go(0);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
    logOut(context) {
      context.commit("LOG_OUT");
    },
    getMain(context) {
      axios({
        method: "get",
        url: `${Server_URL}/main/`,
      })
        .then((response) => {
          context.commit("GET_MAIN", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDetail(context, movieId) {
      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/${movieId}?language=ko`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzQyNzExMDBjM2FjZGYyOTAxYTkxMjhiYjY4NzMwNiIsInN1YiI6IjYzZDIwNWMwNjZhZTRkMDA4YzkyMjMwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YcFHsAOJFOrOfOc0gBh22Q8y2_PaJOT3LCnLb0yerjc",
        },
      })
        .then((response) => {
          context.commit("GET_DETAIL", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProfile(context, userName) {
      axios({
        method: "get",
        url: `${Server_URL}/profile/${userName}/`,
      })
        .then((response) => {
          context.commit("GET_PROFILE", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
