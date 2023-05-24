<template>
  <div>
    <NavBar />
    <div id="profile">
      <h1>{{ userName }} 님의 프로필</h1>

      <img :src="profileImageURL" alt="" v-if="userProfileData.profileimage" />
      <img src="..\src\assets\default.jpg" alt="" v-else />
      <div id="changeImage">
        <vs-button dark @click="active = !active"> Change image </vs-button>
      </div>
    </div>

    <div>
      <!-- 이게 휴대폰 번호로 가져온 영화 제목 -->
      <h6>{{ userName }}님의 휴대폰 번호를 기반으로 추천하는 영화 제목</h6>
      <router-link
        id="link"
        :to="`/movie/${userPhonenumber}`"
        :event="userPhonenumber ? 'click' : ''"
        >{{ phoneMovie }}</router-link
      >
    </div>
    <br />
    <div>
      <h6>{{ userName }}님의 이메일 주소를 기반으로 추천하는 영화 제목</h6>
      <router-link
        id="link"
        :to="`/movie/${userEmail}`"
        :event="userEmail ? 'click' : ''"
        >{{ EmailMovie }}</router-link
      >
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

const Server_URL = "http://127.0.0.1:8000";

export default {
  name: "ProfileView",
  components: {
    NavBar,
  },
  data() {
    return {
      profileImage: "",
      active: false,
      phonenumberMovie: "",
    };
  },
  computed: {
    userName() {
      return this.$store.state.loginUser;
    },
    userProfileData() {
      return this.$store.state.profileData;
    },
    profileImageURL() {
      return `${Server_URL}${this.$store.state.profileData.profileimage}`;
    },
    userPhonenumber() {
      return this.$store.state.phonenumber;
    },
    phoneMovie() {
      if (this.$store.state.email) {
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
          console.log(error);
        });
    },
    getPhoneMovie() {
      this.$store.dispatch("getPhoneMovie", this.userPhonenumber);
    },
    getEmailMovie() {
      this.$store.dispatch("getEmailMovie", this.userEmail);
    },
  },
  created() {
    this.getProfile();
    this.getPhoneMovie();
    this.getEmailMovie();
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
</style>
