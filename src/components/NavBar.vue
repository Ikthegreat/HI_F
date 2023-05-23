<template>
  <div class="center examplex">
    <vs-navbar
      id="navbar"
      padding-scroll
      square
      text-white
      :color="active"
      fixed
      center-collapsed
      v-model="active"
    >
      <template #left>
        <vs-button icon id="toMain" @click="ifNowMain" success>
          <i class="bx bx-home-alt-2"> Main</i>
        </vs-button>
      </template>
      <template #right>
        <router-link :to="{ name: 'profile' }" class="no-underline">
          <vs-button success>
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
  color: #46c93a;
  background-color: white;
}
#navbar {
  background-image: url(../assets/Navbar.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
