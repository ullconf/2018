<template>
  <div class="logo-wrapper">
    <ull-characters></ull-characters>
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
import UllCharacters from "~/components/UllCharacters.vue";
export default {
  components: { UllCharacters },
  methods: {
    beforeEnter(el) {
      this.$velocity(el, { translateY: -1000, rotateZ: -180 }, { duration: 0 });
    },
    enter(el, done) {
      this.$velocity(
        el,
        { translateY: 0 },
        { easing: [500, 20], duration: 1500 }
      );
      this.$velocity(el, { rotateZ: 0 }, { duration: 1000, easing: "in-out" });
      this.$velocity(el, { scale: 0.5, translateY: 50 }, { done: done });
    },
    leave() {}
  }
};
</script>


<style>
.logo-wrapper {
  position: relative;
}
</style>
