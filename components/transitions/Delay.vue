<template>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
    appear>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  props: {
    delay: {
      default: 0
    }
  },
  methods: {
    beforeEnter(el) {
      this.$velocity(el, { opacity: 0 }, { duration: 0 });
    },
    enter(el, done) {
      this.$velocity(
        el,
        { opacity: 1 },
        { duration: 1000, delay: this.delay, done: done }
      );
    },
    leave() {}
  }
};
</script>
