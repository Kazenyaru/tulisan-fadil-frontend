<template>
  <header>
    <a
      href="#"
      class="logo"
    ><router-link to="/">Tulisan Fadil</router-link></a>
    <nav>
      <ul>
        <li>
          <a><router-link to="/">Home</router-link></a>
        </li>
        <li>
          <a><router-link to="/posts">Posts</router-link></a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

header {
  display: flex;
  justify-content: space-between;

  .logo {
    font-weight: bold;
  }

  ul {
    display: flex;

    li a {
      padding: 0 0.5em;
      text-decoration: underline;
    }
  }
}
</style>

<script>
import { mapGetters } from 'vuex';

export default {

  data() {
    return {
      logoutIsVisible: false,
    };
  },

  computed: {
    ...mapGetters('login', ['isLoggedIn', 'getUser']),
  },

  methods: {
    logout() {
      this.$store.dispatch('login/logout').then(() => {
        this.$router.push('/login');
      });
    },
    toggleLogout() {
      this.logoutIsVisible = !this.logoutIsVisible;
    },
  },
};
</script>
