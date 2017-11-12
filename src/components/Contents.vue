<template>
  <div class="content">
    <h2>Rocket Ship</h2>
    <h4> Designing and building a model rocket</h4>


  </div>
</template>

<script>
export default {
  name: "contents",
  data() {
    return {};
  },
  props: {
    id: {
      require: true
    }
  }
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
  .header-content
    width: 50rem
    min-height: 5rem
    padding: 1rem
    box-sizing: border-box
    margin: 0 auto

</style>
