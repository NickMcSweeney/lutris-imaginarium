<template>
  <div class="hello">
    <div class="cover-logo-img"></div>
    <div class="main-body">
      <h1>{{ title }}</h1>
      <h2>{{ intro }}</h2>
      <h2>{{ msg }}</h2>
      <ul>
        <li><a href="https://imgs.xkcd.com/comics/self_driving.png" target="_blank">Confirm Humanity</a></li>
        <li><a href="https://imgs.xkcd.com/comics/good_code.png" target="_blank">My current development process</a></li>
        <li><a href="https://imgs.xkcd.com/comics/server_attention_span.png" target="_blank">Moble version</a></li>
        <li><a href="https://imgs.xkcd.com/comics/server_problem.png" target="_blank">Current server development process</a></li>
        <li><a href="https://imgs.xkcd.com/comics/the_cloud.png" target="_blank">Current server stability</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      title: 'Welcome to My web page',
      intro: 'My name is Nicholas Shindler',
      msg: 'We are still in development an actual site is coming soon...'
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
  color: #201939;
}
.cover-logo-img {
  background-image: url('../assets/light-cover-logo.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 50rem;
  height: 30rem;
  margin: 0 auto;
  padding: 5rem 0;
}
.main-body {
  min-width: 50rem;
  height: auto;
  margin: 0 auto;
}
</style>
