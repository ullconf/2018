<template>
  <transition appear
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
  >
    <div :class="{'d-none': !ready}">
      <h1 class="title">
        Teach Úll
      </h1>
      <p>
        /ʧɒk <span class="text-danger">ool</span>/ Irish <i>"House of Apple"</i>
      </p>
      <p><font-awesome-icon :icon="['fas', 'calendar']"></font-awesome-icon> November 13+14, 2018</p>
      <p><font-awesome-icon :icon="['fas', 'map-marker-question']"></font-awesome-icon> Somewhere in Ireland</p>
      <p class="detail">
        An conference for folks who are drawn to the point where the the humanities and the sciences intersect.
      </p>

      <p class="detail">
        Tickets will be on sale for one week only. The conference will be designed around those who buy tickets. <nuxt-link to="/more"><strong>Find out more...</strong></nuxt-link>
      </p>
      <div class="links">
        <a
          class="btn btn-success btn-lg"
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

<style>
.title {
  display: block;
  font-weight: 500;
  font-size: 2rem;
  margin-top: 1rem;
}

.subtitle {
  font-weight: 500;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.detail {
  width: 20rem;
  text-align: left;
}

.links {
  padding-top: 15px;
}
</style>
