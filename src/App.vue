<template>
  <div
    id="app"
    :class="{
      isLogined: isLogined && !isSelectPage,
      isnotLogined: !isLogined,
      isSelectPage: isSelectPage,
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
    isSelectPage() {
      return this.$route.path === "/select";
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
  font-family: "GowunDodum";
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.isSelectPage {
  background-image: url(./assets/BackGround_Select.jpg);
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
