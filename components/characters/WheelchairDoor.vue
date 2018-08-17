<template>
  <transition-delay :delay="delay">
    <img class="wheelchair-door" src="~assets/images/Wheelchair Door.svg">
  </transition-delay>
</template>

<script>
import TransitionDelay from "~/components/transitions/Delay.vue";
export default {
  components: { TransitionDelay },
  props: ["delay"]
};
</script>

<style lang="scss">
.wheelchair-door {
  position: absolute;
  right: -22px;
  top: 49px;
  width: 65px;

  @include media-breakpoint-up(sm) {
    width: 140px;
    left: 493px;
    top: 74px;
  }
}
</style>
