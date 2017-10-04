<template>
  <div class="content">
    <div class="header-content">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
    </div>
    <div class="body-content">
      <p>{{ bodyText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      title: "title content",
      subtitle: "subtitle content",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus mollis augue, eu fringilla quam scelerisque in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eu laoreet sem, sodales egestas enim. In hac habitasse platea dictumst. Integer laoreet augue augue, interdum tempus lorem tristique et. Morbi eu commodo metus, vitae interdum leo. Pellentesque consequat risus sit amet tristique blandit. Proin in turpis erat. Nulla lobortis odio libero, ac commodo ligula sagittis vel. Mauris consequat tincidunt neque id efficitur. Duis mattis dapibus tempor. Suspendisse elementum imperdiet bibendum.Aliquam varius non diam et condimentum. Curabitur in blandit tellus. Vivamus non lobortis dolor. Quisque ut arcu elementum, ultricies felis nec, molestie nibh. Mauris fringilla ornare libero, convallis euismod nunc rhoncus vel. Nunc bibendum ante sapien, fermentum maximus risus porta eget. Fusce iaculis convallis arcu. Donec erat nibh, sagittis at lacus vitae, molestie faucibus eros. In et felis pharetra, interdum est quis, pretium dui. Pellentesque quis egestas lacus. In eu aliquam nisi. Curabitur feugiat rhoncus lorem, vitae mattis velit. Fusce at magna felis. Nunc porttitor nisl justo, et tincidunt metus iaculis non. Pellentesque tortor turpis, volutpat eu ante sed, commodo euismod arcu. Proin ut dolor nec sapien placerat ornare nec eget augue. Maecenas mollis pellentesque tincidunt. Phasellus euismod nibh id nunc congue, imperdiet egestas velit tristique. Nulla ac ante justo. Nullam tincidunt libero eu justo vulputate vehicula. Morbi quis eros vitae ipsum rutrum tempor et sit amet nibh. Mauris hendrerit ante ac sapien finibus bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam in enim sit amet mi porttitor accumsan. Fusce rhoncus nisi eget ligula vehicula interdum. Suspendisse dapibus enim eget nisl porta, eget viverra lacus rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum bibendum tellus justo, non feugiat enim convallis ut. Cras purus tellus, lobortis ut felis vitae, feugiat volutpat justo. Ut ut viverra neque. Curabitur cursus lobortis dolor sed egestas. Nam ex massa, ultricies nec nibh ut, cursus congue neque. Nullam consequat volutpat nulla. Cras pellentesque neque massa, ut aliquam orci interdum sed. In eget erat lectus. Vivamus nisl odio, mollis quis lectus eget, rutrum pharetra velit. Maecenas consequat erat purus, nec finibus nisl pellentesque non.",
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
</style>
