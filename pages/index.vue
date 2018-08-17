<template>
  <section class="container">
    <div>
      <app-logo v-cloak/>
      <main-content v-cloak/>
      <page-footer></page-footer>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import PageFooter from "~/components/Footer.vue";
import MainContent from "~/components/MainContent.vue";

export default {
  components: {
    AppLogo,
    PageFooter,
    MainContent
  },

  head() {
    return {
      title: "Úll 2018"
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
