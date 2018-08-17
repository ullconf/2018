<template>
  <div class="footer">
    <nuxt-link class="primary" to="/">🏠</nuxt-link>

    <nuxt-link class="primary" to="/who">Who?</nuxt-link>

    <nuxt-link class="primary" to="/code">Code of Conduct</nuxt-link>

    <nuxt-link class="primary" to="/accessibility">A11y</nuxt-link>

    <nuxt-link class="primary" to="/more">⁉️</nuxt-link>
  <br>
    <a href="http://2012.ull.ie" target="_new">2012</a>
    <a href="http://2013.ull.ie" target="_new">2013</a>
    <a href="http://2014.ull.ie" target="_new">2014</a>
    <a href="http://2015.ull.ie" target="_new">2015</a>
    <a href="http://2016.ull.ie" target="_new">2016</a>
    <a href="http://2017.ull.ie" target="_new">2017</a>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 1.5rem;
  text-align: center;
  a {
    padding: 0.5rem;
  }
  a,
  a:visited {
    color: #ccc;

    &.primary {
      color: #aaa;
    }
  }
  a:active,
  a:hover {
    color: $blue;
  }
}
</style>
