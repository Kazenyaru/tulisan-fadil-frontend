<template>
  <div>
    <div class="wrapper">
      <Loading v-if="getLoad" />
      <ul
        v-else-if="getPosts(page)"
        class="posts-container"
      >
        <div
          v-for="post in getPosts(page).data"
          :key="post.slug"
        >
          <PostCard :post="post" />
        </div>
      </ul>

      <PostNavigation
        v-if="!getLoad && getPosts(page)"
        :nav="getPosts(page)"
        :pagination="pagination"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/posts";
</style>

<script>

import { mapActions, mapGetters } from 'vuex';

import Loading from '@/components/Loading.vue';
import PostNavigation from '@/components/PostNavigation.vue';
import PostCard from '@/components/PostCard.vue';

export default {
  components: {
    Loading,
    PostCard,
    PostNavigation,
  },

  data() {
    return {
      page: 1,
    };
  },

  computed: {
    ...mapGetters('blog', ['getPosts']),
    ...mapGetters('view', ['getLoad']),
  },

  methods: {
    ...mapActions('blog', ['paginate']),
    checkData() {
      if (typeof this.getPosts(this.page) === 'undefined') {
        this.paginate(this.page);
      } else {
        console.log('load from existing result');
      }
    },
    pagination(page) {
      this.page = page;
      this.checkData();
    },
  },

  mounted() {
    this.checkData();
  },
};
</script>
