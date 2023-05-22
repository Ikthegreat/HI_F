<template>
  <div>
    <NavBar />
    <h1>{{ userName }} 님의 프로필</h1>
    <img
      :src="userProfileData.profileimage"
      alt=""
      v-if="userProfileData.profileimage"
    />
    <img src="..\src\assets\default.jpg" alt="" v-else />
    <form @submit.prevent="updateImage">
      <input
        type="file"
        id="profileimage"
        accept="image/*"
        @change="imgChange"
      />
      <button>Update</button>
    </form>
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
    };
  },
  computed: {
    userName() {
      return this.$store.state.loginUser;
    },
    userProfileData() {
      return this.$store.state.profileData;
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
    getProfileImg() {
      return this.profileImageURL;
    },
  },
  created() {
    this.getProfile();
  },
};
</script>

<style scoped>
#profileimage {
  width: 250px;
}
</style>