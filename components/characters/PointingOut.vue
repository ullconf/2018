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

<style>
.pointing-out {
  position: absolute;
  margin-left: -25px;
  top: 20px;
  width: 50px;
}
</style>
