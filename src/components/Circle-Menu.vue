<template>
  <div class="content">
    

  </div>
</template>

<script>
export default {
  name: "circle-menu",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@keyframes dash
  0%
    stroke-dashoffset: 1000
  100%
    stroke-dashoffset: 0
@keyframes spin
  100%
    transform: rotateZ(360deg);
.content
  width: 7rem
  height: 7rem
  padding: 2px
  position: relative
  // animation: spin 30s linear reverse infinite
  svg.other-circles
    width: 5rem;
    height: 5rem;
    // position: absolute
    // left: 0
    // top: 0
  svg.little-circles
    width: 5rem;
    height: 5rem;
    // position: absolute
    // left: -2px
    // top: 0
    // animation: spin 20s linear infinite
    // transform-origin: center

// .path
//   stroke-dasharray: 1000
//   stroke-dashoffset: 1000
//   animation: dash 5s linear alternate infinite
</style>
