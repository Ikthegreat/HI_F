<template>
  <div class="start">
    <img alt="sMovieR logo" src="../assets/logo.jpg" class="pb-5" />

    <div id="login">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-secondary mb-5"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        Log In
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="loginModal"
        tabindex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="loginModalLabel">로그인</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3 row">
                  <label for="exampleInputEmail1" class="form-label text-start"
                    >Email address</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    v-model="loginEmail"
                  />
                  <div id="emailHelp" class="form-text text-start">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3 row">
                  <label
                    for="exampleInputPassword1"
                    class="form-label text-start"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    v-model="loginPassword"
                  />
                </div>
                <div class="mb-3 form-check text-start">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >Check me out</label
                  >
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="loginSubmit"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="signup">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        Join Us
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="signupModal"
        tabindex="-1"
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="signupModalLabel">회원가입</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="row mb-3">
                  <label
                    for="inputEmail3"
                    class="col-sm-2 col-form-label text-start"
                    >Email</label
                  >
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputPassword3" class="col-sm-2 col-form-label"
                    >Password</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword3"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label"
                    >Username</label
                  >
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" />
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
    };
  },
  methods: {
    loginSubmit() {
      console.log(this.loginEmail);
      console.log(this.loginPassword);
    },
  },
};
</script>

<style scoped>
</style>