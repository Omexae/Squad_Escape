<template>
  <header class="base-header">
    <div class="header-content">
      <a href="#">Home</a>
      <div class="separator" />
      <div class="logo">LOGO</div>
      <div class="separator" />
      <div v-if="IsLoggedIn == false">
        <font-awesome-icon class="icon" :icon="['fas', 'user']" />
        Not yet logged in
      </div>
      <div v-else>
        Account
      </div>
    </div>
  </header>
</template>

<script>
import login from "../components/LoginPage.vue"

export default {
  components:{
    login
  },
  name: "BaseHeader",
  data(){
    return{
    }
  }
};
</script>

<style scoped>
.base-header {
  background-color: #020059;
  padding-top: 10px;
  width: 100%;
  height: 25px;
  position: absolute;
  top: 0;
  left: 0;
}
.header-content {
  display: flex;
  max-width: 70em;
  margin: auto;
}
.separator {
  flex-grow: 1;
}
.icon {
  margin-right: 0.5em;
}
.logo {
  color: aliceblue;
}
</style>
