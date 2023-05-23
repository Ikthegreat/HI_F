<template>
  <div class="center grid">
    <vs-row :w="12">
      <vs-col id="container" :offset="4" :w="4">
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
              <vs-checkbox success v-model="remember">Remember me</vs-checkbox>
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
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "LogInView",
  data() {
    return {
      userid: "",
      password: "",
      remember: "",
    };
  },
  methods: {
    logIn() {
      const userid = this.userid;
      const password = this.password;

      const payload = {
        userid,
        password,
      };
      this.$store.dispatch("logIn", payload);
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
</style>