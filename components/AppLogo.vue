<template>
  <div :class="{'d-none': !ready, 'logo-wrapper': true}">
    <div class="gradient left"></div>
    <div class="trapezoid"></div>
    <ull-characters v-cloak></ull-characters>
    
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
  data() {
    return {
      ready: false
    };
  },
  methods: {
    beforeEnter(el) {
      this.$velocity(el, { translateY: -1000, rotateZ: -180 }, { duration: 0 });
      this.ready = true;
    },
    enter(el, done) {
      this.$velocity(
        el,
        { translateY: 0 },
        { easing: [500, 20], duration: 1500 }
      );
      this.$velocity(el, { rotateZ: 0 }, { duration: 1000, easing: [500, 20] });
      this.$velocity(el, { scale: 0.5, translateY: 50 }, { done: done });
    },
    leave() {},
    moving() {
      console.log("moving");
      return true;
    }
  }
};
</script>


<style>
.logo-wrapper {
  position: relative;
}
.gradient {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+27,d8779c+66&0.13+0,1+100 */
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+27,d8779c+100&0.13+0,0.18+100 */
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 0.13) 0%,
    rgba(255, 255, 255, 0.14) 27%,
    rgba(216, 119, 156, 0.18) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0.13) 0%,
    rgba(255, 255, 255, 0.14) 27%,
    rgba(216, 119, 156, 0.18) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.13) 0%,
    rgba(255, 255, 255, 0.14) 27%,
    rgba(216, 119, 156, 0.18) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#21ffffff', endColorstr='#2ed8779c',GradientType=0 ); /* IE6-9 */
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 341px;
  z-index: -2;
}
.trapezoid {
  border-bottom: 100px solid white;
  border-left: 679.5px solid transparent;
  border-right: 679.5px solid transparent;
  height: 0;
  width: 100%;
  position: fixed;
  top: 241px;
  right: 0;
  left: 0;
  z-index: -1;
}
</style>
