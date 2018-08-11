<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        Teach Úll
      </h1>
      <p>
        /ʧɒk/ <span class="text-danger">ool</span>
      </p>
      <div class="links">
        <a
          class="btn btn-success"
          href="https://nuxtjs.org/"
          target="_blank">Get Tickets</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
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
