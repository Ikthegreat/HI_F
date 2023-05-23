<template>
  <div class="container">
    <div class="start">
      <h1>Welcome</h1>
      <div class="grid">
        <vs-row justify="center">
          <router-link id="toLogin" :to="{ name: 'login' }">
            <vs-button success size="xl" flat>Log In</vs-button>
          </router-link>
          <router-link id="toSignUp" :to="{ name: 'signup' }">
            <vs-button success size="xl">Get Started</vs-button>
          </router-link>
        </vs-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#toLogin {
  text-decoration: none;
}
h1 {
  color: #46c93a;
}
.container {
  width: 30%;
  height: 30%;
  background-color: rgba(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
}
</style>
