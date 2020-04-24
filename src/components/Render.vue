<script>
import Vue from 'vue';

export default {
  props: ['code'],
  render(h) {
    return h('div', [h(Vue.compile(`<div>${this.code}</div>`))]);
  },
};
</script>
