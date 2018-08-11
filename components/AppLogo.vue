<template>
  <div>
    <transition appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <img src="~assets/images/Logo.png" width="222">
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter(el) {
      this.$velocity(el, { translateY: 1000 }, { duration: 0 });
    },
    enter(el, done) {
      this.$velocity(el, { translateY: 0 }, { done: done });
    },
    leave() {}
  }
};
</script>
