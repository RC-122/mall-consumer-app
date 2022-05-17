<template>
  <van-tabbar fixed route active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/home/classify" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item
      class="shop-card"
      to="/home/shopping"
      icon="cart-o"
      :badge="badge"
      >购物车</van-tabbar-item
    >
    <van-tabbar-item to="/my" icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      counterMap: (state) => state.counterMap,
    }),
    badge() {
      const count = Object.values(this.counterMap).reduce(
        (prev, next) => prev + next,
        0
      );
      if (count > 99) {
        return "99++";
      }
      return count;
    },
  },
};
</script>

<style>
</style>
