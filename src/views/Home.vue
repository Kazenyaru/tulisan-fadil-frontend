<template>
  <div>
    <div class="wrapper">
      <h2 class="title">
        Recent Post
      </h2>
      <Loading v-if="getLoad" />
      <ul
        v-else-if="recentPosts"
        class="posts-container grid"
      >
        <div
          v-for="post in recentPosts.data"
          :key="post.slug"
        >
          <PostCard :post="post" />
        </div>
      </ul>
    </div>

    <LoadMore />
  </div>
</template>

<style lang="scss">
@import "@/styles/home";
.grid {
  display: grid !important;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex';

import Loading from '@/components/Loading.vue';
import PostCard from '@/components/PostCard.vue';
import LoadMore from '@/components/LoadMore.vue';

export default {
  components: {
    Loading,
    PostCard,
    LoadMore,
  },

  data() {
    return {
      recentPosts: {},
    };
  },

  computed: {
    ...mapGetters('blog', ['getPosts']),
    ...mapGetters('view', ['getLoad']),
  },

  methods: {
    ...mapActions('blog', ['paginate']),
    checkData() {
      if (typeof this.getPosts(1) === 'undefined') {
        this.paginate(1).then(() => {
          this.recentPosts = this.getPosts(1);
        });
      } else {
        console.log('load from existing result');
        this.recentPosts = this.getPosts(1);
      }
    },
  },

  mounted() {
    this.checkData();
  },
};
</script>
