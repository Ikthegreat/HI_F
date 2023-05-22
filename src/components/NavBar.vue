<template>
  <div class="center examplex">
    <vs-navbar id="navbar" padding-scroll square text-white :color="active" fixed center-collapsed v-model="active">
      <template #left>
        <vs-button icon id="toMain" @click="ifNowMain" success>
          <i class="bx bx-home-alt"></i>Main
        </vs-button>
      </template>
      <template #right>
        <router-link :to="{ name: 'profile' }">
          <vs-button success>
            Profile
          </vs-button>
        </router-link>
        <router-link :to="{ name: 'logout' }">
          <vs-button flat success>
            Logout
          </vs-button>
        </router-link>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {
  },
  data() {
    return {
      nowPage: this.$route.path,
      active: 'guide',
    };
  },
  methods: {
    ifNowMain() {
      if (this.nowPage === '/') {
        this.$router.go(0);
      }
      else {
        this.$router.push('/')
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* #toMain {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 25px;
  color: white;
} */

#navbar {
  border-bottom: 10px;
  border-bottom-style: solid;
  background-color: ;
}
</style>
