<template>
  <div class="content">
    <h2>Photography</h2>

    <div></div>
  </div>
</template>

<script>
export default {
  name: 'contents',
  data () {
    return {
    }
  },
  props: {
    id: {
      require: true
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

</style>
