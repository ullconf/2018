<template>
  <transition appear
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
  >
    <div :class="{'ready': ready, 'main': true}">
      <h1 class="title">
        Teach Úll
      </h1>
      <p class="legend">
        /ʧɒk <span class="text-danger">ool</span>/ Irish <i>"House of Apple"</i>
      </p>
      <p class="date"><font-awesome-icon :icon="['fas', 'calendar']"></font-awesome-icon> November 13+14, 2018</p>
      <p class="venue"><font-awesome-icon :icon="['fas', 'map-marker-question']"></font-awesome-icon> Somewhere in Ireland</p>
      <p class="subtitle">
        A conference that sits where the humanities and the sciences intersect.
      </p>

      <p class="detail">
        Tickets were on sale for one week only August 18–25. No more tickets will be available before the event. Huge thanks to <a href="https://www.macpaw.com">Macpaw</a>, who were kind enough to support the costs of everyone who applied to our <nuxt-link to="/pricey">affordability lottery</nuxt-link>.
      </p>
      <div class="links">
        <nuxt-link to="/more"
          class="btn btn-outline-primary btn-lg">Find out more</nuxt-link>

        <a
          class="btn btn-danger btn-lg"
          href="https://ti.to/ull/2018"
          target="_blank">Tickets</a>
      </div>
    </div>
  </transition>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: { FontAwesomeIcon },
  data() {
    return {
      ready: false
    };
  },
  methods: {
    beforeEnter(el) {
      this.$velocity(el, { opacity: 0 }, { duration: 0 });
      this.ready = true;
    },
    enter(el, done) {
      this.$velocity(el, { opacity: 1 }, { delay: 1000, done: done });
    },
    leave() {}
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: none;
  &.ready {
    display: block;
  }
}
.title {
  color: #484848;
  display: block;
  font-weight: 500;
  font-size: 2.5rem;
  margin-top: 1rem;
}

.legend {
  opacity: 0.75;
}

.date,
.venue {
  color: #4e4e4e;
  font-size: 1.2rem;
}

.subtitle {
  color: #424242;
  width: 20rem;
  text-align: left;
  font-size: 1.5rem;
}

.detail {
  color: #656565;
  width: 20rem;
  text-align: left;
}

.links {
  padding-top: 15px;
  .btn:nth-child(1) {
    margin-right: 1rem;
  }
}
</style>
