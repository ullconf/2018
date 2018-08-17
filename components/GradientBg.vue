<template>
  <div class="gradient-bg">
    
    <transition appear
      v-on:before-enter="gradientBeforeEnter"
      v-on:enter="gradientEnter"
      v-on:leave="gradientLeave"
      v-bind:css="false"
    >
      <div class="gradient left"></div>
    </transition>
    <transition appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <div class="trapezoid"></div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    gradientBeforeEnter(el) {
      this.$velocity(
        el,
        {
          opacity: 0
        },
        { duration: 0 }
      );
    },
    gradientEnter(el, done) {
      this.$velocity(el, { opacity: 1 }, { duration: 5000, done: done });
    },
    gradientLeave() {},
    beforeEnter(el) {
      this.$velocity(
        el,
        {
          opacity: 0,
          borderLeftWidth: window.innerWidth / 2,
          borderRightWidth: window.innerWidth / 2
        },
        { duration: 0 }
      );
    },
    enter(el, done) {
      this.$velocity(el, { opacity: 1 }, { duration: 0, done: done });
    },
    leave() {}
  }
};
</script>


<style scoped>
.gradient-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
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
  border-left: 0px solid transparent;
  border-right: 0px solid transparent;
  height: 0;
  width: 100%;
  position: fixed;
  top: 241px;
  right: 0;
  left: 0;
  z-index: -1;
}
</style>
