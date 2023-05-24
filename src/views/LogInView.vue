<template>
  <div>
    <div id="container">
      <template header>
        <h4 class="mb-3">Hello!</h4>
      </template>
      <form @submit.prevent="logIn">
        <div class="con-form">
          <vs-input
            border
            success
            id="userid"
            v-model="userid"
            placeholder="ID"
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
              <router-link :to="{ name: 'signup' }"
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
      userid: this.$cookies.get("idCookie"),
      password: "",
      remember: false,
    };
  },
  methods: {
    logIn() {
      if (this.remember) {
        this.$cookies.set("idCookie", this.userid);
      } else {
        this.$cookie.delete("idCookie");
      }

      const userid = this.userid;
      const password = this.password;

      const payload = {
        userid,
        password,
      };
      this.$store.dispatch("logIn", payload);
    },
  },
  created: {
    getRememberState() {
      const rememberState = document.getElementById("rememberBox");
      if (this.userid) {
        rememberState.setAttribute("checked", true);
      }
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
