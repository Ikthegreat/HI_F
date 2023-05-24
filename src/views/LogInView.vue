<template>
  <div>
    <div id="container">
      <template header>
        <h4 class="mb-3">Nice to meet You!</h4>
      </template>
      <form @submit.prevent="logIn">
        <div class="con-form">
          <vs-input
            border
            dark
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
            dark
            type="password"
            v-model="password"
            placeholder="Password"
          >
            <template #icon>
              <i class="bx bx-lock-alt"></i>
            </template>
          </vs-input>
          <div class="flex">
            <vs-checkbox id="rememberBox" dark v-model="remember"
              >Remember me</vs-checkbox
            >
          </div>
        </div>

        <template footer>
          <div class="footer-dialog">
            <vs-button dark type="submit" block> Log In </vs-button>

            <div class="new">
              New Here?
              <router-link id="goSubmit" :to="{ name: 'signup' }"
                >Create New Account</router-link
              >
            </div>
          </div>
        </template>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogInView",
  data() {
    return {
      username: "",
      password: "",
      remember: false,
    };
  },
  methods: {
    logIn() {
      if (this.remember) {
        this.$cookies.set("idCookie", this.username);
      } else {
        this.$cookies.remove("idCookie");
      }

      const username = this.username;
      const password = this.password;

      const payload = {
        username,
        password,
      };
      this.$store.dispatch("logIn", payload);
    },
    getUsername() {
      this.username = this.$cookies.get("idCookie");
    },
    getRememberState() {
      // const rememberState = document.getElementById("rememberBox");
      if (this.username) {
        this.remember = true;
      }
    },
  },
  created() {
    this.getUsername();
    this.getRememberState();
  },
};
</script>

<style scoped>
h4 {
  font-family: "MonomaniacOne-Regular";
  /* color: white; */
  color: rgba(36, 33, 69);
}
#goSubmit {
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
