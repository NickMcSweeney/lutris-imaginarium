<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>My name is Nicholas Shindler</h2>
    <!-- <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul> -->
    <h2>We are still in development an actual site is coming soon...</h2>
    <ul>
      <li><a href="https://imgs.xkcd.com/comics/self_driving.png" target="_blank">Confirm Humanity</a></li>
      <li><a href="https://imgs.xkcd.com/comics/good_code.png" target="_blank">My current development process</a></li>
      <li><a href="https://imgs.xkcd.com/comics/server_attention_span.png" target="_blank">Moble version</a></li>
      <li><a href="https://imgs.xkcd.com/comics/server_problem.png" target="_blank">Current server development process</a></li>
      <li><a href="https://imgs.xkcd.com/comics/the_cloud.png" target="_blank">Current server stability</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to My web page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
