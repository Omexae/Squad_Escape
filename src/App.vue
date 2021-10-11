<template>
<<<<<<< HEAD
  <router-view />
=======
  <div id="nav">
    <base-header></base-header>
    <base-footer></base-footer>
  </div>
>>>>>>> 7fc48b0aaeebad4655d289bb4e33ab58d20af46c
</template>
<script>
import BaseHeader from "./components/BaseHeader.vue";
import BaseFooter from "./components/BaseFooter.vue";
export default({
  name: 'App',
  components:{BaseHeader,BaseFooter}
})
</script>
<style>
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
