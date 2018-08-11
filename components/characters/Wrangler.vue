<template>
  <transition-delay :delay="delay">
    <img class="wrangler" src="~assets/images/Wrangler.svg">
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
.wrangler {
  position: absolute;
  left: 60px;
  top: 92px;
  width: 65px;
}
</style>
