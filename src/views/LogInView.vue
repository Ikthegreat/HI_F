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
            v-model="password"
            placeholder="Password"
          >
            <template #icon>
              <i class="bx bx-lock-alt"></i>
            </template>
          </vs-input>
          <div class="flex">
            <vs-checkbox id="rememberBox" success v-model="remember"
              >Remember me</vs-checkbox
            >
          </div>
        </div>

        <template footer>
          <div class="footer-dialog">
            <vs-button success type="submit" block> Log In </vs-button>

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
  color: #46c93a;
}
#goSubmit {
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
