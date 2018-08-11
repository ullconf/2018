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

<style>
.dog-beads {
  position: absolute;
  right: 60px;
  top: 92px;
  width: 65px;
}
</style>
