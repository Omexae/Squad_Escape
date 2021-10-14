<template id="page">
  <div class="home">
    <EscapeBox
      class="Box"
      title="FUN"
      message="C'est un escape game assez fun mais pas très drole."
      prix="78"
      url="https://images.unsplash.com/photo-1605870445919-838d190e8e1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80"
    />
    <EscapeBox
      class="Box"
      title="FUN"
      message="C'est un escape game assez fun mais pas très drole."
      prix="78"
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
  width: 100%;
  height: 100%;
  display: flex;
}
.Box {
  padding: 20px;
  margin: 20px;
}
</style>
