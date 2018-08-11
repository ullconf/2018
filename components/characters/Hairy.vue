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

<style>
.hairy {
  position: absolute;
  left: 10px;
  top: 101px;
  width: 65px;
}
</style>
