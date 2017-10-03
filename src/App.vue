<template>
  <div id="app">
    <div class="cover-logo-img"/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.cover-logo-img {
  background-image: url('./assets/light-cover-logo.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 50rem;
  height: 40rem;
  margin: 0 auto;
}
</style>
