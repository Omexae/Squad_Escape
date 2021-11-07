<template>
  <div :style="'background-image : url(' + escape.url + ');'" class="box">
    <div class="display">
      <h2>{{ escape.title }}</h2>
      <div class="enddisplay">
        <p>{{ escape.prix }}</p>
        <button @click="addEscapeToReservation(escape)">s'inscrire</button>
      </div>
    </div>
    <div class="hidden">
      <p>{{ escape.message }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "EscapeBox",
  components: {},
  props: {
    escape: Object,
  },
  methods: mapActions("reservation", ["addEscapeToReservation"]),
};
</script>

<style scoped>
.box {
  border-radius: 25px;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.hidden {
  display: flex;
  align-items: flex-start;
  border-radius: 25px;
  display: none;
  text-align: justify;
  background-color: white;
  width: 99%;
  padding: 5px;
  color: black;
}

.box:hover .hidden {
  display: block;
}
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

.display {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
