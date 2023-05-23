<template>
  <div class="center grid">
    <vs-row :w="12">
      <vs-col id="container" :offset="4" :w="4">
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
      </vs-col>
    </vs-row>
  </div>

  <!-- <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="signUp">
      <div>
        <label for="userid">ID : </label>
        <input type="text" id="userid" v-model="userid" />
      </div>

      <div>
        <label for="username">Username : </label>
        <input type="text" id="username" v-model="username" />
      </div>

      <div>
        <label for="password">Password : </label>
        <input type="password" id="password" v-model="password1" />
      </div>

      <div>
        <label for="passwordconfirmation">Password Confirmation : </label>
        <input type="password" id="passwordconfirmation" v-model="password2" />
      </div>

      <input type="submit" value="Sign Up" />
    </form>
  </div> -->
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
  padding: 20px;
  padding-left: 10px;
  border-radius: 5%;
}
</style>