<template>
  <div id="app">
    <transition
      :name="transitionName"
      :mode="this.$router.back ? 'out-in' : 'in-out'"
    >
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: "left",
    };
  },
  watch: {
    $route(to, from) {
      if (to.name === "Classify" && from.name === "Search") {
        this.$router.back = true;
      }
      if (this.$router.back) {
        this.transitionName = "right";
      } else {
        this.transitionName = "left";
      }
      this.$router.back = false;
    },
  },
  created() {
    const counterMap = JSON.parse(localStorage.getItem("goods")) || {};
    this.$store.commit("setCounterMap", counterMap);
  },
};
</script>
<style lang="less">
.view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transition: transform 0.3s linear;
}
.left-enter {
  transform: translate(100%, 0);
}
.right-leave-to {
  transform: translate(100%, 0);
}
</style>
