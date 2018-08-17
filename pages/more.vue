<template>
  <section class="container">
    <div class="blackboard text-center">
      <img class="blackboard" src="~assets/images/Blackboard.svg">
    </div>
    <div class="content col-sm-8 offset-sm-2" v-html="content">
    </div>
    <div class="text-center links">
      <a class="btn btn-success btn-lg"
        href="https://ti.to/ull/2018"
        target="_blank">Buy Tickets</a>
    </div>
    <page-footer></page-footer>
  </section>
</template>

<script>
import content from "../markdown/more.md";
import PageFooter from "~/components/Footer.vue";

export default {
  components: {
    PageFooter
  },
  head() {
    return {
      title: "Úll 2018: WTF?"
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
