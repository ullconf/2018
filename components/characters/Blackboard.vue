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

<style>
.blackboard {
  position: absolute;
  margin-left: -25px;
  top: 60px;
  width: 50px;
}
</style>
