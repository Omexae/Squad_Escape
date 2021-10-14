<template>
  <div :style="'background-image : url(' + url + ');'" id="visible" class="box">
    <div>
      <h2>{{ title }}</h2>
      <p>{{ prix }} euro</p>
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
  width: 300px;
  color: white;
}

.hidden {
  background-color: white;
  width: 270px;
  padding: 5px;
  color: black;
}
#visible {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.hidden {
  display: flex;
  width: 100%;
  border-radius: 25px;
}
.box:hover {
  box-shadow: #999999 -5px -5px 10px, #eeeeee 5px 5px 10px;
}
</style>
