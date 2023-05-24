<template>
  <div>
    <div id="container">
      <template header>
        <h4 class="mb-3">Welcome to <b>Shack</b></h4>
      </template>
      <form @submit.prevent="signUp">
        <div class="con-form">
          <!-- <vs-input
            border
            dark
            id="userid"
            v-model="userid"
            placeholder="ID"
          >
            <template #icon>
              <i class="bx bxs-id-card"></i>
            </template>
          </vs-input> -->

          <vs-input
            border
            dark
            id="username"
            v-model="username"
            placeholder="Username (required)"
          >
            <template #icon>
              <i class="bx bx-user"></i>
            </template>
          </vs-input>
          <vs-input
            border
            dark
            type="password"
            v-model="password1"
            placeholder="Password (required)"
          >
            <template #icon>
              <i class="bx bx-lock-alt"></i>
            </template>
          </vs-input>
          <vs-input
            border
            dark
            type="password"
            v-model="password2"
            placeholder="Password Confirmation (required)"
          >
            <template #icon>
              <i class="bx bx-check"></i>
            </template>
          </vs-input>

          <vs-input
            border
            dark
            type="text"
            v-model="phonenumber"
            placeholder="Phone Number (ex.01012345678)"
          >
            <template #icon>
              <i class="bx bx-phone"></i>
            </template>
          </vs-input>

          <vs-input
            border
            dark
            type="email"
            v-model="email"
            placeholder="E-mail (ex.sample@shack.com)"
          >
            <template #icon>
              <i class="bx bx-envelope"></i>
            </template>
          </vs-input>
        </div>

        <template footer>
          <div class="footer-dialog mt-4">
            <vs-button id="submit" dark type="submit" block>
              Sign In
            </vs-button>
          </div>
        </template>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpView",
  data() {
    return {
      // userid: "",
      username: "",
      password1: "",
      password2: "",
      phonenumber: "",
      email: "",
    };
  },
  methods: {
    signUp() {
      // const userid = this.userid;
      const username = this.username;
      const password1 = this.password1;
      const password2 = this.password2;
      const phonenumber = this.phonenumber;
      const email = this.email;

      const payload = {
        // userid,
        username,
        password1,
        password2,
        phonenumber,
        email,
      };
      this.$store.dispatch("signUp", payload);
    },
  },
};
</script>

<style scoped>
h4 {
  font-family: "MonomaniacOne-Regular";
  /* color: white; */
  color: rgba(36, 33, 69);
}
a {
  text-decoration: none;
  color: rgba(36, 33, 69);
}
i {
  color: rgba(36, 33, 69);
}
#container {
  background-color: rgba(255, 255, 255, 0.4);
  width: 300px;
  padding: 20px;
  padding-left: 10px;
  border-radius: 5%;
}
@font-face {
  font-family: "MonomaniacOne-Regular";
  src: url("../assets/fonts/MonomaniacOne-Regular.ttf") format("truetype");
  font-weight: 400;
}
</style>
