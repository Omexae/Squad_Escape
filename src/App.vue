<template>
  <div id="nav">
    <base-header></base-header>
    <base-footer></base-footer>
    <router-link to="/login">Go login</router-link>
    <router-link to="/register">Go to register</router-link>
<<<<<<< HEAD
    <router-link to="/cart">Cart</router-link>
=======
    <router-link to="/account">Go Account</router-link>
>>>>>>> 72a6d01ebea3ba13a691e9e276b8a275407628a5
  </div>
  <router-view></router-view>
</template>

<script>
import BaseHeader from "./components/BaseHeader.vue";
import BaseFooter from "./components/BaseFooter.vue";
export default {
  name: "App",
  components: { BaseHeader, BaseFooter },
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
</style>
