<template>
  <div class="content">
    <div class="menu-thingy">
      <circle-menu
        :menuItem="['A.L.M.K.N.N.V']"
        @menuSelect="loadStory"
        @clear="clearStory"
      ></circle-menu>
    </div>
    <div v-if="showStory">
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
  </div>
</template>

<script>
import CircleMenu from "@/components/Circle-Menu";

export default {
  name: "blog",
  components: { "circle-menu": CircleMenu },
  data() {
    return {
      title: "",
      subtitle: "",
      bodyText: [],
      imgUrl: "",
      showStory: false,
      showMenu: false,
    };
  },
  methods: {
    expandMenu() {
      this.showMenu = true;
    },
    loadStory() {
      this.showMenu = false;
      const story = this.$store.getters.getCurrentStory;
      this.title = story.title;
      this.subtitle = story.subtitle;
      this.bodyText = story.bodyText;
      this.imgUrl = story.imgUrl;
      this.showStory = true;
    },
    clearStory() {
      this.showStory = false;
    },
  },
  mounted() {
    //do something after mounting vue instance
    // this.$store.dispatch("loadBlog");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.content
  margin: 0
  padding: 1rem
  width: 100%
  box-sizing: border-box
  height: 100%
  .menu-thingy
    width: 50rem
    height: auto
    margin: 0 auto
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    // border-top: 1px solid rgb(42, 37, 46)
    // border-bottom: 1px solid rgb(42, 37, 46)
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
