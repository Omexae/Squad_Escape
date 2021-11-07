<template>
  <h2>Account creation page</h2>
  <br />
  <div class="createaccount">
    <form id="account" method="get">
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
      <label><b>Confirm Password </b> </label>
      <br /><br />
      <input
        type="password"
        name="Cpassword"
        v-model="input.Cpassword"
        id="CPassword"
        placeholder="Confirm Password"
      />
      <br /><br />
      <input
        type="button"
        name="register"
        id="register"
        v-on:click="Register()"
        value="Create Account"
      />
      <br /><br />
      <input
        type="button"
        name="logto"
        id="logto"
        @click="$router.push({ name: 'login' })"
        value="Already have an account ?"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateAccount",
  data() {
    return {
      input: {
        username: "",
        password: "",
        Cpassword: "",
      },
    };
  },
  methods: {
    Register() {
      if (
        this.input.Cpassword != "" &&
        this.input.password != "" &&
        this.input.username != ""
      ) {
        if (this.input.Cpassword == this.input.password) {
          console.log("connected");
          this.$store.state.IsLoggedIn = true;
          console.log(this.$store.state.IsLoggedIn);
          this.$router.push({ name: "Home" });
        } else {
          alert("Both password must be identical");
        }
      } else {
        alert("Please fill all entry");
      }
    },
  },
};
</script>

<style>
.createaccount {
  width: 382px;
  overflow: hidden;
  margin: auto;
  margin: 20 0 0 450px;
  padding: 80px;
  background: #020059;
  border-radius: 15px;
}
#register {
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 17px;
  padding-left: 7px;
  color: blue;
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
#Uname {
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 3px;
  padding-left: 8px;
}
#Pass,
#CPassword {
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 3px;
  padding-left: 8px;
}
#createacc,
#logto {
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
