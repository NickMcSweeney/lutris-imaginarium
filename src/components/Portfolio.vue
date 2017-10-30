<template>
  <div class="content">
    <div class="header-content">
      <h1>{{ title }}</h1>
      <h4>{{ subtitle }}</h4>
    </div>

    <div class="body-content">
      <router-link to="portfolio/contents/1/" tag="div" class="satelite-content top-left" id="mountain-lake">Content 1</router-link>
      <router-link to="portfolio/photos/" tag="div" class="satelite-content middle-right" id="the-wall">Photos</router-link>
      <router-link to="portfolio/contents/1/" tag="div" class="satelite-content bottom-left" id="venice">Content 2</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolio',
  data () {
    return {
      title: "I Am Nick",
      subtitle: "Irregular software developer and designer",
      line: "",
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

  .body-content
    width: 40rem
    height: 40rem
    margin: 0 auto
    border: .6rem solid rgb(42, 37, 46)
    border-radius: 40rem
    background-image: url('../assets/spiderweb-edited.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover
    box-shadow: inset 0rem 0rem 1rem rgb(42, 37, 46)
    position: relative
    /*display: flex
    justify-content: center
    flex-direction: row
    flex-wrap: wrap*/
    .satelite-content
      width: 15rem
      height: 15rem
      border: .6rem solid rgb(42, 37, 46)
      border-radius: 15rem
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover
      box-shadow: inset 0rem 0rem 1rem rgb(42, 37, 46)
      position: absolute
      text-align: center
      vertical-align: middle
      box-sizing: border-box
      padding: 5.5rem 1rem
      font-size: 1.5rem
      font-weight: 700
      color: rgba(247, 247, 247, .6)
    .top-left
      top: -2rem
      left: -3rem
    .middle-right
      top: 9rem
      right: -7rem
    .bottom-left
      bottom: -4rem
      left: 2rem
  #mountain-lake
    background-image: url('../assets/mountain-lake.jpg');
  #the-wall
    background-image: url('../assets/the-wall.jpg');
  #venice
    background-image: url('../assets/venice.jpg');
  h6
    margin: 0 auto
</style>
