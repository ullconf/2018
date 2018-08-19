<template>
  <transition appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
    <div :class="{'footer': true, 'ready': ready}">
      <nuxt-link class="pricey" to="/pricey">Too expensive?</nuxt-link>
      <br>
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
      <br>
      <a href="https://github.com/ullconf/2018" target="_new"><font-awesome-icon :icon="faGithub"></font-awesome-icon></a>
      <a href="https://twitter.com/ullconf" target="_new"><font-awesome-icon :icon="faTwitter"></font-awesome-icon></a>
    </div>
  </transition>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
export default {
  components: { FontAwesomeIcon },
  data() {
    return {
      ready: false
    };
  },
  computed: {
    faGithub() {
      return faGithub;
    },
    faTwitter() {
      return faTwitter;
    }
  },
  methods: {
    beforeEnter(el) {
      this.$velocity(el, { opacity: 0 }, { duration: 0 });
      this.ready = true;
    },
    enter(el, done) {
      this.$velocity(el, { opacity: 1 }, { delay: 2000, done: done });
    },
    leave() {}
  }
};
</script>

<style lang="scss" scoped>
.footer {
  display: none;
  margin-top: 1.5rem;
  text-align: center;
  &.ready {
    display: block;
  }
  a {
    padding: 0.5rem;
  }
  a,
  a:visited {
    color: #ccc;

    &.primary {
      color: #aaa;
    }

    &.pricey {
      color: #4a4242;
    }
  }
  a:active,
  a:hover {
    color: $blue;
  }
}
</style>
