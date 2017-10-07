<template>
  <div class="content">
    <div class="header-content">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
    </div>
    <div>
      <img src="../assets/the_cloud.png"/>
      <h6>Image thanks to xkcd: <a href="https://xkcd.com/1084/">https://xkcd.com/1084/</a></h6>
    </div>
    <div class="body-content">
      <p v-for="line in bodyText">{{ line }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      title: "Arch Linux MongoDB Koa Nginx Node Vue = ???",
      subtitle: "Learning how servers work, and mean lamps, and stuff",
      bodyText: ["This is the story of how a very old disintegrating laptop is now humming along in a box running this website...", "Once upon a time a laptop was going to be thrown away because it was old, It's screen was falling off, it kept forgetting who he was and falling asleep. But a young man saw an unseen potential for this old laptop and gave him a new life.", "Chapter 1 Linux: This may have actually been the most straightforward Arch Linux install that I have ever done. Just a simple 2 part partition and no GUI to speak of (on the todo list is to actually write out my current hoop-jumping that I do for a non-server arch install).", "Chapter 2 Node or Apache: I went with the node side because I already work with JavaScript so it should be more applicable and require less learning on my end. However, I do have plans to set up the backend to take Python (if I ever get this site to a point it actually does anything). Having modularity and customizability is going to be one of the main themes of this project, just a heads up.", "Chapter 3 Making node do something...really anything: So like I just said, modularity and customizability are what drew me to Koa as middleware for building the server. That and being different and difficult. Building out a basic server file turns out to be super simple -- figuring out how to deploy in a production environment, huge secret. I did end up figuring out though and am using PM2 and Arch's Systemd to run the server as a local host. which is where Nginx comes in.", "Chapter 4 How Nginx got invited to the party: Everything I've read so far recommends doing some kind of proxing for your server and hand in hand with that is Nginx. And sure there is an add-on for Koa that does proxying, but I really like making my life harder for some reason. And it was a great opportunity to take a peek at one of the most popular pieces of server software. So I got everything set up to have Nginx proxy a local server out to the machines IP, which was pretty easy. Just had to use proxy_pass.", "Chapter 5 Firewalls: I did spend about 2 days trying to figure out why nobody could see the website until I found this great article (https://ncona.com/2013/02/making-your-local-server-accessible-from-anywhere/) about firewall configuration. And that's how I got the server setup outside the firewall (silly me).", "Chapter 6 Mongo: I'm actually not sure if Mongo is the best idea for what I'm doing, but I really wanted to play with it ('cause it's all new and shiny). That said, I barely have an excuse to need an actual database at this point.", "But now there's some content on the site, and there is a happy old nearly overheating laptop that can share my ramblings with the world.", "And he lived happily ever after for the remainder of his days,","The End."],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.content
  margin: 1rem
  padding: 0
  width: 100%
  box-sizing: border-box
  height: 100%
  .header-content
    width: 50rem
    min-height: 5rem
    padding: 1rem
    box-sizing: border-box
    margin: 0 auto
    h1, h2
      margin: 0 auto
      text-transform: capitalize
    h1
      font-size: 2rem
      font-weight: bold
      // letter-spacing: 0.08rem
    h2
      font-size: 1.5rem
      font-weight: lighter
      letter-spacing: 0.06rem
  .body-content
    width: 50rem
    min-height: 40rem
    padding: 1rem
    box-sizing: border-box
    margin: 0 auto
    p
      font-size: 1rem
      text-align: justify
  h6
    margin: 0 auto
</style>
