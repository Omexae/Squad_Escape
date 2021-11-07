<template>
  <div v-for="escape in escapes" :key="escape.id">
    <p>{{ escape.id }} - {{ escape.title }}</p>
  </div>
  <button>Contacter Groupe Escape</button>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapState({
      reserve: (state) => state.reservation.reserve,
    }),
    ...mapGetters("reservation", {
      escapes: "reservations",
    }),
  },
};
</script>

<style>
button {
  background-color: #020059;
  height: 30px;
  width: 100px;
  border-radius: 15px;
  border: none;
  margin: 5px;
  align-self: flex-end;
  color: white;
}

button:hover {
  border: #cccccc solid;
  background-color: white;
  color: #020059;
}
</style>
