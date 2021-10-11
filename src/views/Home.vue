<template>
  <div class="home">
    <EscapeBox title="FUN" message="Fun" prix="67" />
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
