import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
import router from "@/router";
import Swal from "sweetalert2";

const Server_URL = "http://127.0.0.1:8000";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: "vuexStore",
      storage: window.sessionStorage,
    }),
  ],
  state: {
    token: null,
    movies: [],
    movieData: null,
    loginUser: "",
    profileData: null,
    phonenumber: null,
    email: null,
    userPhonenumberMovieTitle: null,
    userEmailMovieTitle: null,
    userWhoLikeThis: null,
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false;
    },
  },
  mutations: {
    LOG_IN(state, { token, username, phonenumber, email }) {
      state.token = token;
      state.loginUser = username;
      state.phonenumber = phonenumber;
      state.email = email;
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
    GET_PHONE_MOVIE(state, data) {
      if (data) {
        state.userPhonenumberMovieTitle = data;
      }
    },
    GET_EMAIL_MOVIE(state, data) {
      if (data) {
        state.userEmailMovieTitle = data;
      }
    },
    GET_WHO_LIKE_THIS(state, data) {
      state.userWhoLikeThis = data
    },
  },
  actions: {
    signUp(context, payload) {
      // const userid = payload.userid;
      const username = payload.username;
      const password1 = payload.password1;
      const password2 = payload.password2;
      const phonenumber = payload.phonenumber;
      const email = payload.email;

      // phonenumber로 movie_id 만들기
      let x = phonenumber;
      let y = 0;
      x = x.substring(3);
      y = parseInt(x.substring(0, 1)) + parseInt(x.substring(7));
      x = parseInt(x.substring(1, 7));

      // email로 movie_id 만들기
      let r = email;
      r = r.substring(0, r.indexOf("@"));

      let s = "";
      let t = 0;

      for (let i = 0; i < r.length; i++) {
        let char = r.charAt(i);
        let ascii = char.charCodeAt(0);
        if (i % 2 === 0) {
          s += ascii.toString();
        } else {
          s += ascii.toString();
          t += parseInt(s);
          s = "";
        }
      }

      if (t >= 1000000) {
        t = t - 999999;
      }

      axios({
        method: "post",
        url: `${Server_URL}/accounts/signup/`,
        data: {
          username,
          password1,
          password2,
        },
      })
        .then((result) => {
          context.commit("LOG_IN", {
            token: result.data.key,
            username: username,
            phonenumber: x + y,
            email: t,
          });
          router.push("/select");
        })
        .catch((error) => {
          console.log(error.response.data);
          if (error.response.data.username) {
            Swal.fire({
              title: "회원가입 오류",
              text: "아이디를 확인해주세요.",
              icon: "error",
              confirmButtonColor: "#46c93a",
            });
          }
          if (error.response.data.password1) {
            const passwordConditions =
              "<div style='text-align: left;'>비밀번호 조건<br><br>- Username과 유사하지 않아야 합니다.<br>- 최소 8자 이상이어야 합니다.<br>- 비밀번호는 Common 하지 않아야 합니다.<br>- 전부 숫자로 된 비밀번호는 사용할 수 없습니다.</div>";
            Swal.fire({
              title: "회원가입 오류",
              html: passwordConditions,
              icon: "error",
              confirmButtonColor: "#46c93a",
            });
          }
          if (error.response.data.non_field_errors) {
            Swal.fire({
              title: "회원가입 오류",
              text: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
              icon: "error",
              confirmButtonColor: "#46c93a",
            });
          }
        });
    },
    logIn(context, payload) {
      const username = payload.username;
      const password = payload.password;
      axios({
        method: "POST",
        url: `${Server_URL}/accounts/login/`,
        data: {
          username,
          password,
        },
      })
        .then((response) => {
          context.commit("LOG_IN", {
            token: response.data.key,
            username: username,
          });
          router.push("/");
          router.go(0);
        })
        .catch(() => {
          Swal.fire({
            title: "로그인 오류",
            text: "로그인 정보를 확인해주세요.",
            icon: "error",
            confirmButtonColor: "#46c93a",
          });
        });
    },
    logOut(context) {
      context.commit("LOG_OUT");
    },
    getMain(context) {
      console.log(this.state.token);
      axios({
        method: "get",
        url: `${Server_URL}/main/`,
        headers: {
          Authorization: `Token ${this.state.token}`,
        },
      })
        .then((response) => {
          context.commit("GET_MAIN", response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
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
        .then((tmdbResponse) => {
          context.commit("GET_DETAIL", tmdbResponse.data);
          return axios({
            method: "get",
            url: `${Server_URL}/main/${movieId}/`,
          }).then((serverResponse) => {
            context.commit("GET_WHO_LIKE_THIS", serverResponse.data)
          })
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
    getPhoneMovie(context, num) {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${num}`,
        params: { language: "ko" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzQyNzExMDBjM2FjZGYyOTAxYTkxMjhiYjY4NzMwNiIsInN1YiI6IjYzZDIwNWMwNjZhZTRkMDA4YzkyMjMwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YcFHsAOJFOrOfOc0gBh22Q8y2_PaJOT3LCnLb0yerjc",
        },
      };
      axios
        .request(options)
        .then(function (response) {
          context.commit("GET_PHONE_MOVIE", response.data.title);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getEmailMovie(context, num) {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${num}`,
        params: { language: "ko" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzQyNzExMDBjM2FjZGYyOTAxYTkxMjhiYjY4NzMwNiIsInN1YiI6IjYzZDIwNWMwNjZhZTRkMDA4YzkyMjMwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YcFHsAOJFOrOfOc0gBh22Q8y2_PaJOT3LCnLb0yerjc",
        },
      };
      axios
        .request(options)
        .then(function (response) {
          context.commit("GET_EMAIL_MOVIE", response.data.title);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
  modules: {},
});
