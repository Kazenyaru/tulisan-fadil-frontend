import { baseUri } from '../../constant';

const namespaced = true;

const state = {
  posts: {},
  post: {},
};

const getters = {
  getPosts: (state) => (page) => state.posts[page],
  getPost: (state) => (slug) => state.post[slug],
};

const actions = {
  async paginate({ commit, dispatch }, page) {
    try {
      dispatch('view/load', true, { root: true });
      const res = await $http({
        method: 'GET',
        url: `${baseUri()}posts/all`,
        params: {
          page,
        },
      });
      await commit('setPosts', res.data);
      dispatch('view/load', false, { root: true });
    } catch (error) {
      console.log(error);
    }
  },

  async showPost({ commit, dispatch }, slug) {
    try {
      dispatch('view/load', true, { root: true });
      const res = await $http({
        method: 'GET',
        url: `${baseUri()}post/${slug}`,
      });
      commit('setPost', res.data[0]);
      dispatch('view/load', false, { root: true });
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  setPosts: async (state, posts) => {
    state.posts[posts.current_page] = posts;
  },
  setPost: async (state, post) => {
    state.post[post.slug] = post;
  },
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
