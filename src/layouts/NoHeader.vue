<template>
  <div>
    <div class="hero-container">
      <div class="wrapper">
        <Nav />
      </div>
    </div>

    <slot />


    <Flash class="center-on-body" />
  </div>
</template>

<script>

import Nav from '@/components/layouts/Nav.vue';
import Flash from '@/components/Flash.vue';

export default {
  components: {
    Nav,
    Flash,
  },
};
</script>
