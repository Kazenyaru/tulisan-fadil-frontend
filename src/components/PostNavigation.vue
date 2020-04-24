<template>
  <nav>
    <ul
      class="pagination"
      role="navigation"
    >
      <div id="prev">
        <li
          v-if="disabledLeft"
          class="page-item disabled"
          aria-disabled="true"
          aria-label="« Previous"
        >
          <span
            class="page-link"
            aria-hidden="true"
          >‹</span>
        </li>
        <li
          v-else
          class="page-item"
        >
          <a
            class="page-link"
            href="#"
            @click="pagination(nav.current_page - 1)"
            rel="preg"
            aria-label="« Previous"
          >‹</a>
        </li>
      </div>

      <div
        id="list"
        v-for="(_, index) in nav.last_page"
        :key="index"
      >
        <li
          v-if="nav.current_page == index + 1"
          class="bullet active"
          aria-current="page"
        >
          <span class="page-link">{{ index + 1 }}</span>
        </li>
        <li
          v-else
          class="page-item"
        >
          <a
            class="bullet"
            href="#"
            @click="pagination(index + 1)"
          >
            {{
              index + 1
            }}
          </a>
        </li>
      </div>

      <div id="next">
        <li
          v-if="disabledRight"
          class="page-item disabled"
          aria-disabled="true"
          aria-label="Next »"
        >
          <span
            class="page-link"
            aria-hidden="true"
          >›</span>
        </li>
        <li
          v-else
          class="page-item"
        >
          <a
            class="page-link"
            @click="pagination(nav.current_page + 1)"
            href="#"
            rel="preg"
            aria-label="Next »"
          >›</a>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>

export default {
  props: {
    nav: Object,
    pagination: Function,
  },
  data() {
    return {};
  },

  computed: {
    currentPage() {
      return this.nav.currentPage;
    },
    disabledLeft() {
      return !this.nav.prev_page_url;
    },
    disabledRight() {
      return !this.nav.next_page_url;
    },
  },

};
</script>
