import Vue from 'vue';
import Vuex from 'vuex';

import view from './modules/view';
import blog from './modules/blog';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    view,
    blog,
  },
});
