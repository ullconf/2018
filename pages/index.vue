<template>
  <section class="container">
    <div>
      <app-logo v-cloak/>
      <main-content v-cloak/>
      <div class="footer">
        <nuxt-link to="/who">Who?</nuxt-link>

        <nuxt-link to="/code">Code of Conduct</nuxt-link>

        <nuxt-link to="/accessibility">Accessibility</nuxt-link>
      </div>
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
  },

  head() {
    return {
      title: "Úll 2018"
    };
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
.footer {
  margin-top: 1.5rem;
}
.footer a {
  padding: 0.5rem;
}
</style>
