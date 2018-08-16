<template>
  <section class="container">
    <div class="blackboard text-center">
      <img class="blackboard" src="~assets/images/Blackboard.svg">
    </div>
    <div class="content col-8 offset-2" v-html="content">
    </div>
  </section>
</template>

<script>
import content from "../markdown/more.md";

export default {
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
  h2 {
    font-size: 1.5rem;
  }
}
</style>
