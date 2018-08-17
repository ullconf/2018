<template>
  <section class="container">
    <div class="text-center banner">
      <img src="~assets/images/Hairy.svg">
      <img src="~assets/images/Wrangler.svg">
    </div>
    <div class="content col-sm-8 offset-sm-2">
      <h1>Who?</h1>
      <p>Úll 2018 will be organised by <a href="https://twitter.com/paulca">Paul Campbell</a> and <a href="https://twitter.com/aoiferr">Aoife Reaper-Reynolds</a>.</p>

      <h2>Paul</h2>
      <p>Paul is the co-founder and CEO of <a href="https://ti.to">Tito</a>, web-based software for selling tickets online. Tito is used by conferences like <a href="https://layers.is/">Layers</a>, <a href="http://altconf.com/">AltConf</a>, <a href="https://360idev.com/">360idev</a>, <a href="http://daringfireball.net/">The Talk Show Live</a>, and <a href="http://www.loopinsight.com/2018/03/22/the-loop-bash-at-wwdc-2018/">The Beard Bash.</a> Paul co-organised <a href="http://2010.funconf.com">3</a> <a href="http://2011.funconf.com">iterations</a> of Funconf, a conference on a bus, in a castle, and on an island, before starting Úll 6 years ago.

      <h2>Aoife</h2>
      <p>Aoife Reaper-Reynolds joined the Úll team in 2016 to help with logistics, but she brought her very own stamp and style to the events she co-produced. Aoife specialises in organising retreats that nourish the "body, mind and soul".</p>
    </div>
    <page-footer></page-footer>
  </section>
</template>

<script>
import PageFooter from "~/components/Footer.vue";

export default {
  head() {
    return {
      title: "Úll 2018: Who?"
    };
  },
  components: {
    PageFooter
  }
};
</script>

<style>
.banner {
  margin-top: 1.5rem;
}
</style>
