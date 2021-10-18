<template id="page">
  <div class="home">
    <EscapeBox
      class="Box"
      title="Escape Game de l'année"
      message="le thème est secret, il est possble de le trouver mais nous vons dirons jamais où."
      prix="Gratuit"
      url="https://images.unsplash.com/photo-1605870445919-838d190e8e1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80"
    />
    <EscapeBox
      class="Box"
      title="Chasse au trésor"
      message="La chasse au trésor sera un projet réalisé par les membres L1 de groupe escape en autonomie"
      prix="Gratuit"
      url="https://images.unsplash.com/photo-1605870445919-838d190e8e1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import EscapeBox from "../components/HomePage/EscapeBox.vue";
export default {
  name: "Home",
  components: {
    EscapeBox,
  },
};
</script>

<style scoped>
.home {
  background-color: #cccccc;
  width: 80%;
  height: 1080px;
  display: flex;
  flex-direction: column;
}
.Box {
  margin: 20px;
  padding: 10px;
}
#page {
  display: flex;
  align-items: center;
  align-self: center;
}
</style>
