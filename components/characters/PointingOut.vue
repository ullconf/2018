<template>
  <transition-delay :delay="delay">
    <img class="pointing-out" src="~assets/images/Pointing Out.svg">
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
.pointing-out {
  position: absolute;
  margin-left: -30px;
  top: -60px;
  width: 50px;

  @include media-breakpoint-up(sm) {
    width: 110px;
    left: -60px;
    top: 31px;
  }
}
</style>
