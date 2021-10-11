<template>
  <div class="Box">
    <h2>{{ title }}</h2>
    <p>{{ prix }}</p>
  </div>
  <div class="hidden">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "HscapeBox",
  components: {},
  props: {
    title: String,
    message: String,
    prix: Int32Array,
    image: String,
  },
};
</script>

<style></style>
