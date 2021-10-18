<template>
  <div :style="'background-image : url(' + url + ');'" id="visible" class="box">
    <div class="display">
      <h2>{{ title }}</h2>
      <div class="enddisplay">
        <p>{{ prix }}</p>
        <button>S'inscrire</button>
      </div>
    </div>
    <div class="hidden">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EscapeBox",
  components: {},
  props: {
    title: String,
    message: String,
    prix: Int32Array,
    url: String,
  },
};
</script>

<style scoped>
.box {
  background-color: #cccccc;
  border-radius: 25px;
  box-shadow: #999999 5px 5px 10px, #eeeeee -5px -5px 10px;
  color: white;
  display: flex;
}

#visible {
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
.box:hover {
  box-shadow: #999999 -5px -5px 10px, #eeeeee 5px 5px 10px;
}

.box:hover .hidden {
  display: block;
}
button {
  background-color: #cccccc;
  height: 30px;
  width: 100px;
  border-radius: 15px;
  border: none;
  margin: 5px;
  align-self: flex-end;
}

button:hover {
  border: #cccccc solid;
  background-color: white;
}

.display {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
