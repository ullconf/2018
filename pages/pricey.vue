<template>
  <section class="container">
    <div class="blackboard text-center">
      <img src="~assets/images/GeorgianButler.svg">
    </div>
    <div class="content col-8 offset-2" v-html="content">
    </div>
    <div class="text-center links">
      <a
        class="btn btn-success btn-lg"
        href="https://ti.to/úll/2018/with/diversity-ticket-96c96be4-fd66-4ebb-afd3-bea1473debd8"
        target="_blank">Enter the Lottery</a>
      </div>
    <page-footer />
  </section>
</template>

<script>
import content from "../markdown/pricey.md";
import PageFooter from "~/components/Footer.vue";

export default {
  components: {
    PageFooter
  },
  head() {
    return {
      title: "Úll 2018: Too Expensive?"
    };
  },
  computed: {
    content() {
      return content;
    }
  }
};
</script>

<style lang="scss" scoped>
.blackboard {
  margin-top: 1.5rem;
}
.content {
  color: #424242;
  /deep/ h2 {
    font-size: 1.5rem;
  }
}
.links {
  margin-bottom: 1.5rem;
}
</style>
