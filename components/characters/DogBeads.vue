<template>
  <transition-delay :delay="delay">
    <img class="dog-beads" src="~assets/images/Dog Beads.svg">
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
.dog-beads {
  position: absolute;
  right: 27px;
  top: 41px;
  width: 80px;

  @include media-breakpoint-up(sm) {
    width: 150px;
    left: 363px;
    top: 217px;
  }
}
</style>
