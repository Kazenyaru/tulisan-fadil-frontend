<template>
  <div
    v-if="getAlert && alertVisible"
    class="mask"
  >
    <div
      class="container"
    >
      <svg
        class="top"
        viewBox="0 0 50px 50px"
        id="svgTriangle"
        style="background:#fff;"
      >
        <polygon
          points="25 5, 45 45, 5 45"
          fill="#f65656"
          stroke-linejoin="round"
          stroke-width="5"
          stroke="#f65656"
        />
        <text
          x="20.5"
          y="37.5"
          font-size="30px"
          fill="#fff"
          font-family="Open Sans"
        >!</text>
      </svg>
      <div
        class="middle"
      >
        <p> {{ getAlert.status }}</p>
        <span>{{ getAlert.message }}</span>
      </div>

      <button
        @click="toggleAlert"
        :class="'bottom '+(getAlert.status || 'error')"
      >
        Dismiss
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  z-index: 31415;
  width: 350px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}
.hide {
  transition: 1s;
  transform: scale(0);
}
.top {
  width: 50px;
  height: 50px;
  position: relative;
  left: calc(50% - 25px);
  margin-top: 25px;
}
.middle {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 1rem;
  padding-bottom: 2rem;
}
.middle p {
  width: 100%;
  text-align: center;
  font-weight: 400;
  font-size: 1.5rem;
  margin: 0.25rem;
  color: #333;
}
.middle span {
  width: 75%;
  text-align: center;
  color: #777;
  font-weight: 100;
}
.bottom {
  width: 100%;
  text-align: center;
  color: rgba(0, 47, 255, 0.5);
  font-size: 1.25rem;
  padding: 1rem;
  font-weight: 100;
  border-radius: 0 0 0.25rem 0.25rem;
  cursor: pointer;
}
.error:hover {
  color: #fff;
  background-color: #f65656;
}

.success:hover {
  color: #fff;
  background-color: #56f656;
}

</style>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {

  computed: {
    ...mapGetters('view', ['getAlert', 'alertVisible']),
  },

  methods: {
    ...mapActions('view', ['toggleAlert']),
  },
};
</script>
