<template>
  <div id="nav">
    <base-header></base-header>
    <base-footer></base-footer>
    <!--<router-link to="/login">Go login</router-link>
    <router-link to="/register">Go to register</router-link>-->
    <!--<router-link to="/cart">Cart</router-link>-->
    <!--<router-link to="/account">Go Account</router-link>-->
    <div v-if="!this.$store.state.IsLoggedIn">
      <input
        type="button"
        name="accto"
        id="accto"
        @click="$router.push({ name: 'login' })"
        value="Login/Register"
      />
    </div>
    <div v-else>
      <input
        type="button"
        name="carto"
        id="carto"
        @click="$router.push({ name: 'Cart page' })"
        value="Go to cart"
      />
      <input
        type="button"
        name="logout"
        id="logout"
        @click="LogOut"
        value="Log Out"
      />
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import BaseHeader from "./components/BaseHeader.vue";
import BaseFooter from "./components/BaseFooter.vue";
export default {
  name: "App",
  components: { BaseHeader, BaseFooter },
  methods: {
    LogOut() {
      this.$store.state.IsLoggedIn = false;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#accto,
#carto,
#logout {
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 17px;
  padding-left: 7px;
  color: blue;
}
</style>
