<template>
  <div class="classify-container">
    <div class="search-btn">
      <van-icon name="search" />
      特价特价跳楼大甩卖
    </div>
    <OneTab />
    <SideBar />
  </div>
</template>

<script>
import OneTab from '../components/OneTab.vue';
import SideBar from '../components/SideBar.vue';

export default {
  components: {
    OneTab,
    SideBar
},
};
</script>

<style lang="less" scoped>
.classify-container {
  width: 375px;
  .search-btn {
    width: 355px;
    height: 33px;
    line-height: 33px;
    background-color: #eee;
    margin: 11px auto;
    border-radius: 10px;
    font-size:14px;
    text-align: center;
    color:#a1a1a1;
    >* {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
