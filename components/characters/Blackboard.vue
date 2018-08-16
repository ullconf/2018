<template>
  <transition-delay :delay="delay">
    <img class="blackboard" src="~assets/images/Blackboard.svg">
  </transition-delay>
</template>

<script>
import TransitionDelay from "~/components/transitions/Delay.vue";
export default {
  components: { TransitionDelay },
  props: ["delay"]
};
</script>

<style lang="scss" scoped>
.blackboard {
  position: absolute;
  margin-left: -25px;
  top: 10px;
  width: 40px;

  @include media-breakpoint-up(sm) {
    width: 90px;
    left: 215px;
    top: -61px;
  }
}
</style>
