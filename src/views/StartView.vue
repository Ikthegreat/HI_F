<template>
  <div class="container">
    <div class="start">
      <h1>Shack</h1>
      <div class="grid">
        <vs-row justify="center">
          <router-link id="button" :to="{ name: 'login' }">
            <vs-button id="button" dark border transparent>Log In</vs-button>
          </router-link>
          <router-link id="button" :to="{ name: 'signup' }">
            <vs-button id="button" dark border transparent
              >Get Started</vs-button
            >
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
#button {
  text-decoration: none;
  color: white;
  font-weight: 800;
}
h1 {
  font-family: "MonomaniacOne-Regular";
  color: white;
}
.container {
  width: 250px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
}
@font-face {
  font-family: "MonomaniacOne-Regular";
  src: url("../assets/fonts/MonomaniacOne-Regular.ttf") format("truetype");
  font-weight: 400;
}
</style>
