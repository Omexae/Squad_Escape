<template>
  <header class="base-header">
    <div class="header-content">
      <input
        type="button"
        name="HomeBtn"
        id="HomeBtn"
        @click="$router.push({ name: 'Home' })"
        value="Accueil"
      />
      <div class="separator" />
      <div class="logo">LOGO</div>
      <div class="separator" />
      <div v-if="!this.$store.state.IsLoggedIn">
        <div>Not yet logged in</div>
      </div>
      <div v-else>
        <input
          type="button"
          name="AccBtn"
          id="AccBtn"
          @click="$router.push({ name: 'AccountPage' })"
          value="Compte"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  name: "BaseHeader",
  data() {
    return {};
  },
  methods: {
    Update() {
      this.LoggedIn = true;
    },
  },
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
#HomeBtn,
#AccBtn {
  width: 300px;
  height: 15px;
  border: none;
  border-radius: 17px;
  color: white;
  background-color: blue;
}
</style>
