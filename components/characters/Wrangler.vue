<template>
  <transition-delay :delay="delay">
    <img class="wrangler" src="~assets/images/Wrangler.svg">
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
.wrangler {
  position: absolute;
  left: 35px;
  top: 43px;
  width: 65px;

  @include media-breakpoint-up(sm) {
    width: 130px;
    left: -203px;
    top: 211px;
  }
}
</style>
