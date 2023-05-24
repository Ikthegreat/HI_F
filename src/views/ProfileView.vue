<template>
  <div>
    <NavBar />
    <div id="profile">
      <h1>{{ userName }} 님의 프로필</h1>

      <img :src="profileImageURL" alt="" v-if="userProfileData.profileimage" />
      <img src="..\src\assets\default.jpg" alt="" v-else />
      <div id="changeImage">
        <vs-button success border @click="active = !active">
          Change image
        </vs-button>
      </div>
    </div>

    <vs-dialog width="300px" center v-model="active">
      <div class="con-content">
        <form @submit.prevent="updateImage" class="center">
          <vs-input
            success
            border
            type="file"
            id="profileimage"
            accept="image/*"
            @change="imgChange"
          />
          <vs-button success>Update</vs-button>
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
    // getProfileImg() {
    //   return this.profileImageURL;
    // },
  },
  created() {
    this.getProfile();
  },
};
</script>

<style scoped>
#profile {
  background-color: white;
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
</style>
