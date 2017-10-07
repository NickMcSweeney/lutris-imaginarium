<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/blog">My Blog</router-link></li>
      <li><router-link to="/about">About Me</router-link></li>
      <!-- <li><router-link to="/contents">Site Directory</router-link></li> -->
    </ul>
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
ul {
  list-style-type: none;
  padding: 0;
  min-width: 50rem;
  height: auto;
  margin: 0 auto;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #201939;
}

</style>
