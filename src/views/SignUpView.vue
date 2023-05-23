<template>
  <div>
    <div id="container">
      <template header>
        <h4 class="mb-3">Welcome to <b>sMovieR</b></h4>
      </template>
      <form @submit.prevent="signUp">
        <div class="con-form">
          <vs-input
            border
            success
            id="userid"
            v-model="userid"
            placeholder="ID"
          >
            <template #icon>
              <i class="bx bxs-id-card"></i>
            </template>
          </vs-input>

          <vs-input
            border
            success
            id="username"
            v-model="username"
            placeholder="Username"
          >
            <template #icon>
              <i class="bx bx-user"></i>
            </template>
          </vs-input>
          <vs-input
            border
            success
            type="password"
            v-model="password1"
            placeholder="Password"
          >
            <template #icon>
              <i class="bx bx-lock-alt"></i>
            </template>
          </vs-input>
          <vs-input
            border
            success
            type="password"
            v-model="password2"
            placeholder="Password Confirmation"
          >
            <template #icon>
              <i class="bx bx-check"></i>
            </template>
          </vs-input>
        </div>

        <template footer>
          <div class="footer-dialog">
            <vs-button success type="submit" block> Sign In </vs-button>
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
      userid: "",
      username: "",
      password1: "",
      password2: "",
    };
  },
  methods: {
    signUp() {
      const userid = this.userid;
      const username = this.username;
      const password1 = this.password1;
      const password2 = this.password2;

      const payload = {
        userid,
        username,
        password1,
        password2,
      };
      this.$store.dispatch("signUp", payload);
    },
  },
};
</script>

<style scoped>
h4 {
  color: #46c93a;
}
a {
  text-decoration: none;
  color: #46c93a;
}
i {
  color: #46c93a;
}
#container {
  background-color: white;
  width: 300px;
  padding: 20px;
  padding-left: 10px;
  border-radius: 5%;
}
</style>
