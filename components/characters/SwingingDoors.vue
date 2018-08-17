<template>
  <transition-delay :delay="delay">
    <img class="swinging-doors" src="~assets/images/Swinging Doors.svg">
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
.swinging-doors {
  position: absolute;
  left: -20px;
  top: -23px;
  width: 65px;

  @include media-breakpoint-up(sm) {
    width: 130px;
    left: -327px;
    top: 64px;
  }
}
</style>
