<template>
  <div>
    <NavBar />
    <div id="coverbox">
      <div id="profile">
        <h1>{{ userName }} 님의 프로필</h1>

        <img
          :src="profileImageURL"
          alt=""
          v-if="ProfileData.user.profileimage"
        />
        <img src="..\src\assets\default.jpg" alt="" v-else />
        <div id="changeImage">
          <vs-button dark @click="active = !active"> Change image </vs-button>
        </div>
      </div>
    </div>

    <div style="display: flex">
      <div id="coverbox">
        <div>
          <h6>{{ userName }}님의 휴대폰 번호를 기반으로 추천하는 영화 제목</h6>
          <div v-if="phoneMovie && userPhonenumber">
            <router-link id="link" :to="`/movie/${userPhonenumber}`">{{
              phoneMovie
            }}</router-link>
          </div>
          <div v-else>
            <h6>아쉽지만 해당하는 영화가 없습니다.</h6>
          </div>
        </div>
        <br />
        <div>
          <h6>{{ userName }}님의 이메일 주소를 기반으로 추천하는 영화 제목</h6>
          <div v-if="EmailMovie && userEmail">
            <router-link id="link" :to="`/movie/${userEmail}`">{{
              EmailMovie
            }}</router-link>
          </div>
          <div v-else>
            <h6>아쉽지만 해당하는 영화가 없습니다.</h6>
          </div>
        </div>
      </div>

      <div id="coverbox" style="max-width: 50%">
        <h6>{{ userName }}님이 좋아하시는 영화</h6>
        <swiper :options="swiperOption">
          <div v-for="index in ProfileData.movies.length" :key="index">
            <swiper-slide>
              <img
                :src="getPosterURL(ProfileData.movies[index - 1].poster_path)"
                alt=""
                style="width: 120px"
                @click="goDetail(ProfileData.movies[index - 1].id)"
              />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </div>
        </swiper>

        <!-- <div
          v-for="index in ProfileData.movies.length"
          :key="index"
          style="padding: 10px"
        > -->
        <!-- <img
          :src="getPosterURL(ProfileData.movies[index - 1].poster_path)"
          alt=""
          style="width: 120px"
          @click="goDetail(ProfileData.movies[index - 1].id)"
        /> -->
        <!-- </div> -->
      </div>
    </div>

    <vs-dialog width="300px" center v-model="active">
      <div class="con-content">
        <form @submit.prevent="updateImage" class="center">
          <vs-input
            dark
            border
            type="file"
            id="profileimage"
            accept="image/*"
            @change="imgChange"
          />
          <vs-button dark>Update</vs-button>
        </form>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button @click="active = false" dark transparent>
            Cancel
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import axios from "axios";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

const Server_URL = "http://127.0.0.1:8000";

export default {
  name: "ProfileView",
  components: {
    NavBar,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      profileImage: "",
      active: false,
      phonenumberMovie: "",
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  computed: {
    userName() {
      return this.$store.state.loginUser;
    },
    ProfileData() {
      return this.$store.state.profileData;
    },
    profileImageURL() {
      return `${Server_URL}${this.$store.state.profileData.user.profileimage}`;
    },
    userPhonenumber() {
      return this.$store.state.phonenumber;
    },
    phoneMovie() {
      if (this.$store.state.phonenumber) {
        return this.$store.state.userPhonenumberMovieTitle;
      } else {
        return "정보가 없습니다.";
      }
    },
    userEmail() {
      return this.$store.state.email;
    },
    EmailMovie() {
      if (this.$store.state.email) {
        return this.$store.state.userEmailMovieTitle;
      } else {
        return "정보가 없습니다.";
      }
    },
  },
  methods: {
    imgChange(event) {
      const file = event.target.files[0];
      console.log(file);
      this.profileImage = file;
    },
    getProfile() {
      this.$store.dispatch("getProfile", this.userName);
    },
    updateImage() {
      const formData = new FormData();
      formData.append("profileimage", this.profileImage);
      axios
        .put(`${Server_URL}/upload_img/${this.userName}/`, formData, {
          headers: {
            Authorization: `Token ${this.$store.state.token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          this.$router.go(0);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
    getPhoneMovie() {
      this.$store.dispatch("getPhoneMovie", this.userPhonenumber);
    },
    getEmailMovie() {
      this.$store.dispatch("getEmailMovie", this.userEmail);
    },
    getPosterURL(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
    goDetail(content) {
      this.$router.push(`/movie/${content}`);
    },
  },
  created() {
    this.getProfile();
    this.getPhoneMovie();
    this.getEmailMovie();
    console.log(this.profileImageURL);
  },
};
</script>

<style scoped>
#profile {
  /* background-color: white; */
  padding: 30px;
  border-radius: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#profileimage {
  width: 250px;
}
.center {
  display: flex;
}
img {
  width: 200px;
}
#changeImage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#link {
  color: white;
}
#coverbox {
  padding: 30px;
  padding-top: 25px;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 50px;
}
.swiper-pagination {
  padding: 10px;
}
</style>
