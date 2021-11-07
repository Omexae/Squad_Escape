<template>
  <div>
    <div id="Form">
      <h2>Login Page</h2>
      <br />
      <div class="loginform">
        <form id="loginform" method="get">
          <label><b>User Name </b> </label>
          <input
            type="text"
            name="username"
            v-model="input.username"
            id="Username"
            placeholder="Username"
          />
          <br /><br />
          <label><b>Password </b> </label>
          <input
            type="password"
            name="password"
            v-model="input.password"
            id="Password"
            placeholder="Password"
          />
          <br /><br />
          <input
            type="button"
            name="log"
            id="Log"
            v-on:click="login()"
            value="Log In Here"
          />
          <br /><br />
          <br /><br />
          <input
            type="button"
            name="reg"
            id="reg"
            @click="$router.push({ name: 'Register Page' })"
            value="Don't have an account ?"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == "user" &&
          this.input.password == "password"
        ) {
          console.log("connected");
          this.$store.state.IsLoggedIn = true;
          console.log(this.$store.state.IsLoggedIn);
          this.$router.push({ name: "Home" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    },
  },
};
</script>

<style>
.loginform {
  width: 382px;
  overflow: hidden;
  margin: auto;
  margin: 20 0 0 450px;
  padding: 80px;
  background: #020059;
  border-radius: 15px;
}
h2 {
  text-align: center;
  color: #020059;
  padding: 20px;
}
label {
  color: #08ffd1;
  font-size: 17px;
}
#Username {
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 3px;
  padding-left: 8px;
}
#Password {
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 3px;
  padding-left: 8px;
}
#Log,
#reg {
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 17px;
  padding-left: 7px;
  color: blue;
}
span {
  color: white;
  font-size: 17px;
}
a {
  float: right;
  background-color: grey;
}
</style>
