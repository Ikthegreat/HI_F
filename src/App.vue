<template>
  <div
    id="app"
    :class="{
      isLogined: isLogined,
      isnotLogined: !isLogined,
    }"
  >
    <router-view />
  </div>
</template>

<script>
import store from "./store/index";

export default {
  name: "App",
  components: {},
  computed: {
    isLogined() {
      return store.getters.isLogin;
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  height: 937px;

  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 100px;
  padding-bottom: 100px; */
  font-family: "GowunDodum";
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.isLogined {
  background-image: url(./assets/BackGround_isLogined.jpg);
  padding-top: 100px;
}
.isnotLogined {
  background-image: url(./assets/BackGround.jpg);
}

@font-face {
  font-family: "GowunDodum";
  src: url("assets/fonts/GowunDodum-Regular.ttf") format("truetype");
  font-weight: 300;
}
</style>
