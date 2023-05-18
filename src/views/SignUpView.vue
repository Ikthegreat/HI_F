<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="signUp">
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
  </div>
</template>

<script>
export default {
  name: "SignUpView",
  data() {
    return {
      username: "",
      email: "",
      password1: "",
      password2: "",
    };
  },
  methods: {
    signUp() {
      const username = this.username;
      const password1 = this.password1;
      const password2 = this.password2;

      const payload = {
        username,
        password1,
        password2,
      };
      this.$store.dispatch("signUp", payload);
    },
  },
};
</script>