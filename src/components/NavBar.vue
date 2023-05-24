<template>
  <div class="center examplex">
    <vs-navbar
      id="navbar"
      square
      text-white
      :color="active"
      fixed
      center-collapsed
      v-model="active"
    >
      <template #left>
        <vs-button icon id="toMain" @click="ifNowMain" dark>
          <i class="bx bx-home-alt-2"></i>
        </vs-button>
      </template>
      <template #right>
        <router-link :to="{ name: 'profile' }" class="no-underline">
          <vs-button dark>
            <i class="bx bx-user"> Profile</i>
          </vs-button>
        </router-link>
        <router-link :to="{ name: 'logout' }" class="no-underline">
          <vs-button id="logOutBtn">
            <i class="bx bx-log-out"> Logout</i>
          </vs-button>
        </router-link>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  data() {
    return {
      nowPage: this.$route.path,
      active: "guide",
    };
  },
  methods: {
    ifNowMain() {
      if (this.nowPage === "/") {
        this.$router.go(0);
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.no-underline {
  text-decoration: none;
}
#logOutBtn {
  color: rgba(36, 33, 69);
  background-color: rgba(255, 255, 255, 0.8);
}
#navbar {
  background-color: rgba(255, 255, 255, 0.1);
  /* background-image: url(../assets/BackGround_Select.jpg); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  /* background-position: center; */
  /* background-color: black; */
}
</style>
