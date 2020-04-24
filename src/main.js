import Vue from 'vue';

import axios from 'axios';
import VueEmbedGist from 'vue-embed-gist';

import GistFadil from '@/components/GistFadil.vue';
import Default from '@/layouts/Default.vue';
import NoHeader from '@/layouts/NoHeader.vue';

import store from './store';
import router from './router';
import App from './App.vue';

window.$http = axios;
// axios.defaults.baseURL = 'http://myurl';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

Vue.component('vue-embed-gist', VueEmbedGist);
Vue.component('gist-fadil', GistFadil);
Vue.component('default-layout', Default);
Vue.component('no-header-layout', NoHeader);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
