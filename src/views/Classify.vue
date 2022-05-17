<template>
  <div class="classify-container">
    <router-link to="/search" tag="div" class="search-btn">
      <van-icon name="search" />
      特价特价跳楼大甩卖
    </router-link>
    <OneTab />
    <template v-if="showContent">
    <SideBar />
    <GoodsList/>
    </template>
    <van-loading color="#1989fa" vertical v-else/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import OneTab from '../components/OneTab.vue';
import SideBar from '../components/SideBar.vue';
import GoodsList from '@/components/GoodsList.vue';

export default {
  computed:{
    ...mapState({
      showContent:(state) =>state.showContent,
    })
  },
  components: {
    OneTab,
    SideBar,
    GoodsList,
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
