<template>
  <transition-delay :delay="delay">
    <img class="georgian-butler" src="~assets/images/GeorgianButler.svg">
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
.georgian-butler {
  position: absolute;
  right: 10px;
  top: 101px;
  width: 65px;
}
</style>
