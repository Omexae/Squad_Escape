<template>
  <div id="Profile">
    <img
      src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0NjQzOTk4OTQ4OTkyMzQy/ansel-elgort-poses-for-a-portrait-during-the-baby-driver-premiere-2017-sxsw-conference-and-festivals-on-march-11-2017-in-austin-texas-photo-by-matt-winkelmeyer_getty-imagesfor-sxsw-square.jpg"
      class="profileimage"
    />
    <div class="infos">EXEMPLE Exemple</div>
  </div>
</template>

<script>
export default {
  name: "AccountPage",
};
</script>

<style scoped>
.profileimage {
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75px;
  height: 75px;
}
.infos {
  text-align: center;
}
</style>
