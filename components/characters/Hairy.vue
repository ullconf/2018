<template>
  <transition-delay :delay="delay">
    <img class="hairy" src="~assets/images/Hairy.svg">
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
@import "~bootstrap/scss/mixins/breakpoints";
.hairy {
  position: absolute;
  left: -30px;
  top: 71px;
  width: 65px;
  @include media-breakpoint-up(sm) {
    width: 130px;
    left: -250px;
    top: 241px;
  }
}
</style>
