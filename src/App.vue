<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: white;
  width: 100%;
  height: 100%;
  /* justify-content: center; */
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  font-family: "GowunDodum";

  background-image: url(./assets/Navbar.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

@font-face {
  font-family: "GowunDodum";
  src: url("assets/fonts/GowunDodum-Regular.ttf") format("truetype");
  font-weight: 300;
}
</style>