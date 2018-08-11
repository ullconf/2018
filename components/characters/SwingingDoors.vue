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

<style>
.swinging-doors {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 65px;
}
</style>
