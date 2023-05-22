<template>
  <div class="center grid">
    <vs-row w="12">
      <vs-col id="container" offset="4" w="4">
        <template header>
          <h4 class="mb-3">
            Welcome to <b>Vuesax</b>
          </h4>
        </template>
        <form @submit.prevent="logIn" id="loginForm">
          <div class="con-form">
            <vs-input v-model="username" placeholder="Username">
              <template #icon>
                <i></i>
              </template>
            </vs-input>
            <vs-input type="password" v-model="password" placeholder="Password">
              <template #icon>
                <i></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="remember">Remember me</vs-checkbox>
              <!-- <a href="#">Forgot Password?</a> -->
            </div>
          </div>

          <template footer>
            <div class="footer-dialog">
              <vs-button type="submit" block>
                Sign In
              </vs-button>

              <div class="new">
                New Here? <a href="#">Create New Account</a>
              </div>
            </div>
          </template>
        </form>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "LogInView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    logIn() {
      const username = this.username;
      const password = this.password;

      const payload = {
        username,
        password,
      };
      this.$store.dispatch("logIn", payload);
    },
  },
};
</script>

<style scoped>
/* #container {
  width: 50%;
} */
</style>