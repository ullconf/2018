<template>
  <section class="container">
    <div>
      <app-logo v-cloak/>
      <main-content v-cloak/>
      <div class="footer">
        <nuxt-link to="/who">Who?</nuxt-link>

        <nuxt-link to="/code">Code of Conduct</nuxt-link>

        <nuxt-link to="/accessibility">Accessibility</nuxt-link>
      <br>
        <a href="http://2012.ull.ie" target="_new">2012</a>
        <a href="http://2013.ull.ie" target="_new">2013</a>
        <a href="http://2014.ull.ie" target="_new">2014</a>
        <a href="http://2015.ull.ie" target="_new">2015</a>
        <a href="http://2016.ull.ie" target="_new">2016</a>
        <a href="http://2017.ull.ie" target="_new">2017</a>
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
