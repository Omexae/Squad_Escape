<template>
<header class="base-header">
    <div class="header-content">
    <font-awesome-icon class="icon" :icon="['fas', 'home']" /> Home
    <div class="separator" />
    <div class="logo">LOGO</div>
    <div class="separator" />
    <font-awesome-icon class="icon" :icon="['fas', 'user']" /> Not yet logged in
    </div>
  </header>
</template>

<script>
export default{
    name: 'BaseHeader'
}

</script>

<style scoped>
.base-header {
  background-color: #020059;
  padding: 1em;
  width: 100%;
  height:25px;
  position:absolute;
  top:0;
  left:0;
}
.header-content {
  display: flex;
  max-width: 70em;
  margin:auto;
}
.separator {
  flex-grow: 1;
}
.icon {
  margin-right: 0.5em;
}
.logo{
    color:aliceblue;
}
</style>