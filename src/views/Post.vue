<template>
  <div>
    <!-- <BlogPost :loading="getLoad" /> -->
    <Loading
      class="center"
      v-if="getLoad"
    />

    <div v-if="!getLoad && post">
      <div class="hero-container">
        <div class="wrapper">
          <Nav />
          <Header>
            <h1>{{ post.title }}</h1>
            <h4>
              {{ post.kutipan }}
            </h4>
            <span class="meta">
              Posted by
              <a
                href="#"
                v-if="post.author"
              >{{ post.author.name }}</a>
              <br>
              <a href="#">{{ post.created_at }}</a>
            </span>
          </Header>
        </div>
      </div>


      <article class="wrapper">
        <div
          class="the-post"
        >
          <Render :code="postBodyFiltered" />
        </div>
      </article>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "@/styles/post";
.center {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>

<script>
import { mapGetters } from 'vuex';

import Nav from '@/components/layouts/Nav.vue';
import Header from '@/components/Header.vue';
import Render from '@/components/Render.vue';
import Loading from '@/components/Loading.vue';

export default {
  components: {
    Nav,
    Header,
    Render,
    Loading,
  },

  data() {
    return {
      post: Object,
    };
  },

  computed: {
    ...mapGetters('blog', ['getPost']),
    ...mapGetters('view', ['getLoad']),
    postBodyFiltered() {
      if (this.post.body) {
        return this.post.body
          .replace(/script/g, 'gist-fadil')
          .replace(/GistFadil src/g, 'gist-fadil :src');
      }
      return null;
    },
  },

  methods: {
    checkData() {
      if (typeof this.getPost(this.$route.params.slug) === 'undefined') {
        this.$store.dispatch('blog/showPost', this.$route.params.slug).then(() => {
          this.post = this.getPost(this.$route.params.slug);
        });
      } else {
        console.log('load from existing result');
        this.post = this.getPost(this.$route.params.slug);
      }
    },
  },

  mounted() {
    this.checkData();
  },
};
</script>
