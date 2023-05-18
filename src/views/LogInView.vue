<template>
  <div>
    <h1>Log In</h1>
    <form @submit.prevent="logIn">
      <div>
        <label for="username">Username : </label>
        <input type="text" id="username" v-model="username" />
      </div>

      <div>
        <label for="password">Password : </label>
        <input type="password" id="password" v-model="password" />
      </div>

      <input type="submit" value="Log In" />
    </form>
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