<template>
  <transition-delay :delay="delay">
    <img class="wheelchair-door" src="~assets/images/Wheelchair Door.svg">
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
.wheelchair-door {
  position: absolute;
  right: 25px;
  top: 20px;
  width: 65px;
}
</style>
