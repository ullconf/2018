<template>
  <section class="container">
    <div>
      <app-logo/>
      <transition appear
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false"
      >
        <div>
          <h1 class="title">
            Teach Úll
          </h1>
          <p>
            /ʧɒk <span class="text-danger">ool</span>/ <i>"House of Apple"</i>
          </p>
          <div class="links">
            <a
              class="btn btn-success"
              href="https://nuxtjs.org/"
              target="_blank">Get Tickets</a>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  },

  methods: {
    beforeEnter(el) {
      this.$velocity(el, { opacity: 0 }, { duration: 0 });
    },
    enter(el, done) {
      this.$velocity(el, { opacity: 1 }, { delay: 500, done: done });
    },
    leave() {}
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

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

.links {
  padding-top: 15px;
}
</style>
