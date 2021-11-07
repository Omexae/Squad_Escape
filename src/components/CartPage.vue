<template>
  <div v-for="escape in reserve" :key="escape.id">
   <p> {{escape.title}}</p>
   </div>
</template>

<script>
export default {
  name: "Cart",
  computed: mapState({
    reserve: (state) => state.reserve,
  }),
};
</script>

<style>

</style>