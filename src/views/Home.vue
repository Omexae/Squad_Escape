<template>
  <div class="home">
    <EscapeBox
      v-for="escape in escapes"
      :key="escape.id"
      :escape="escape"
      class="Box"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import EscapeBox from "../components/HomePage/EscapeBox.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    EscapeBox,
  },
  computed: mapState({
    escapes: (state) => state.escapes.all,
  }),
  methods: mapActions("reservation", ["pushEscapeToReservation"]),
  created() {
    this.$store.dispatch("escapes/getAllEscape");
  },
};
</script>

<style scoped>
.home {
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.Box {
  margin: 20px;
  padding: 10px;
}
</style>
