<template>
  <div class="hero-content">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: 'blog/home-bg.jpg',
    },
  },
};
</script>
