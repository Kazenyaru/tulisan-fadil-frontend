<template>
  <div>
    <div class="hero-container">
      <div class="wrapper">
        <Nav />
        <Header>
          <h1>I Am Developer</h1>
          <p class="subtitle">
            I Create Things
          </p>
        </Header>
      </div>
    </div>

    <slot />


    <Flash class="center-on-body" />
  </div>
</template>

<script>

import Nav from '@/components/layouts/Nav.vue';
import Header from '@/components/Header.vue';
import Flash from '@/components/Flash.vue';

export default {
  components: {
    Nav,
    Header,
    Flash,
  },
};
</script>
