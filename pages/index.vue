<template>
  <section class="container">
    <div>
      <app-logo v-cloak/>
      <main-content v-cloak/>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import MainContent from "~/components/MainContent.vue";

export default {
  components: {
    AppLogo,
    MainContent
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
