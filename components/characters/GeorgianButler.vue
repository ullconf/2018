<template>
  <transition-delay :delay="delay">
    <img class="georgian-butler" src="~assets/images/GeorgianButler.svg">
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
.georgian-butler {
  position: absolute;
  right: -31px;
  top: 71px;
  width: 52px;

  @include media-breakpoint-up(sm) {
    width: 100px;
    left: 467px;
    top: 244px;
  }
}
</style>
