<template>
  <router-link to="/posts">
    <nav class="loadmore">
      <ul>
        <li>
          <hr class="longer">
        </li>
        <li>
          <hr class="shorter">
        </li>
        <li>
          <p>Load More</p>
        </li>
      </ul>
    </nav>
  </router-link>
</template>

<style lang="scss" scoped>
.loadmore {
  display: flex;
  justify-content: center;
  cursor: pointer;

  .shorter {
    width: 50px;
  }

  p {
    color: var(--text);
  }
}
</style>
