<template>
  <div class="shopping">
    <div class="top-nav">
      <van-nav-bar title="购物车" right-text="删除" @click-right="del" />
    </div>
    <div class="card-list">
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <div class="card-box" v-for="item in list" :key="item.id">
          <van-checkbox class="check" :name="item.id"></van-checkbox>
          <GoodsCard v-bind="item" :num="counterMap[item.id]" :nofly="true" />
        </div>
      </van-checkbox-group>
    </div>
    <van-submit-bar
      :price="allMoney"
      :button-text="`去结算(${totalNum})`"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import GoodsCard from "@/components/GoodsCard.vue";
import { getGoodsByIds } from "@/api";
import { mapMutations, mapState } from "vuex";
import { Dialog, Toast } from "vant";
export default {
  components: {
    GoodsCard,
  },
  data() {
    return {
      result: [],
      list: [],
      checked: false,
    };
  },
  watch: {
    result() {
      if (this.result.length === this.list.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
  },
  methods: {
    ...mapMutations(['storageChange']),
    checkAll() {
      if (this.checked) {
        this.$refs.checkboxGroup.toggleAll(true);
      } else {
        this.$refs.checkboxGroup.toggleAll(false);
      }
    },
    async del() {
      if (this.result.length === 0) {
        Toast("你没有选中商品");
        return;
      }
      try {
        await Dialog.confirm({
          title: "是否删除选中商品",
        });
        this.result.forEach((id) => {
          this.storageChange({ id, value: -Infinity });
          this.list = this.list.filter((item) => !this.result.includes(item.id));
        });
      } catch (error) {
        Toast("已取消");
      }
      // try {
      //   await Dialog.confirm({message:'是否删除选中商品'})
      // } catch (error) {
      //   Toast('已取消')
      // }
    },
    async getAllData() {
      const result = Object.keys(this.counterMap);
      const res = await getGoodsByIds(result.join());
      this.list = res.list;
    },
  },
  created() {
    this.getAllData();
  },
  computed: {
    ...mapState({
      counterMap: (state) => state.counterMap,
    }),
    onSubmit() {},
    allMoney() {
      const resArr = this.list.filter((item) => this.result.includes(item.id));

      return resArr.reduce((prev, next) => {
        const num = this.counterMap[next.id] || 0;
        return Math.round(num * next.price * 100) + prev;
      }, 0);
    },
    totalNum() {
      const resArr = this.list.filter((item) => this.result.includes(item.id));
      const res = resArr.reduce(
        (prev, next) => prev + (this.counterMap[next.id] || 0),
        0
      );
      return res;
    },
  },
};
</script>

<style lang="less" scoped>
.shopping {
  background: #eee;
  min-height: 100vh;
  .top-nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }
  .card-list {
    width: 100%;
    position: absolute;
    top: 46px;
    z-index: 0;
    box-sizing: border-box;
    padding: 10px 10px 100px 10px;
    background: #fff;
    .card-box {
      display: flex;
      justify-content: center;
    }
    .check {
      margin-right: 10px;
      flex-shrink: 0;
    }
  }
  .van-submit-bar {
    bottom: 50px;
  }
}
</style>
 