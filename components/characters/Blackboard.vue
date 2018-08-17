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
  margin-left: 25px;
  top: -8px;
  width: 40px;

  @include media-breakpoint-up(sm) {
    width: 80px;
    left: 305px;
    top: 29px;
  }
}
</style>
