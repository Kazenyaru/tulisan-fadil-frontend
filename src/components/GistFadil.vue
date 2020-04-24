<template>
  <div>
    <vue-embed-gist
      :gist-id="getGist[0]"
      :file="getGist[1]"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: String,
  },
  computed: {
    getGist() {
      return this.src
        .replace(
          // eslint-disable-next-line no-useless-escape
          /https:|gist.github.com|Kazenyaru|[\/]|.js|[?]|file|/g,
          '',
        )
        .split('=');
    },
  },
};
</script>
