<template>
  <div class="detail-shop" v-if="Object.keys(shop).length !== 0">
    <div class="top">
      <img :src="shop.logo" alt="" />
      <div class="shop-name">{{ shop.name }}</div>
    </div>
    <div class="center">
      <div class="left">
        <div class="left-container">
          <div class="sells">
            <div>{{ shop.sells }}</div>
            <span>总销量</span>
          </div>
          <div class="goodsCount">
            <div>{{ shop.goodsCount }}</div>
            <span>全部宝贝</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="description">
          <div class="evaluation">{{ shop.score[0].name }}</div>
          <div :style="{ color: shop.score[0].isBetter ? 'red' : 'green' }">
            {{ shop.score[0].score }}
          </div>
          <div v-if="shop.score[0].isBetter" class="high">高</div>
          <div v-else class="low">低</div>
        </div>
        <div class="reasonable">
          <div class="evaluation">{{ shop.score[1].name }}</div>
          <div :style="{ color: shop.score[1].isBetter ? 'red' : 'green' }">
            {{ shop.score[1].score }}
          </div>
          <div v-if="shop.score[1].isBetter" class="high">高</div>
          <div v-else class="low">低</div>
        </div>
        <div class="quality">
          <div class="evaluation">{{ shop.score[2].name }}</div>
          <div :style="{ color: shop.score[2].isBetter ? 'red' : 'green' }">
            {{ shop.score[2].score }}
          </div>
          <div v-if="shop.score[2].isBetter" class="high">高</div>
          <div v-else class="low">低</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div>进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.top {
  padding: 20px 10px 10px 10px;
  position: relative;
}
.top img {
  width: 40px;
  height: 40px;
  border: 1px solid rgb(184, 180, 180);
  border-radius: 50%;
}
.shop-name {
  display: inline-block;
  position: absolute;
  left: 60px;
  top: 50%;
  transform: translateY(-50%);
}
.center {
  padding: 0px 20px 10px 20px;
  display: flex;
  align-content: center;
  text-align: center;
  font-size: 13px;
}
.left {
  flex: 1;
  padding: 10px 0;
}
.left-container {
  padding: 5px 0;
  display: flex;
  border-right: 1px solid rgb(198, 194, 194);
}
.right {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 15px;
}
.sells {
  flex: 1;
}
.sells div {
  font-size: 18px;
  margin-bottom: 5px;
}
.goodsCount {
  flex: 1;
}
.goodsCount div {
  font-size: 18px;
  margin-bottom: 5px;
}
.description,
.reasonable,
.quality {
  display: flex;
  justify-content: space-between;
  padding: 5px;
}
.high {
  background-color: red;
  color: white;
}
.low {
  background-color: green;
  color: white;
}

.bottom div {
  text-align: center;
  width: 100px;
  margin: 0 auto;
  padding: 2px;
  border-radius: 10px;
  background-color: rgb(228, 224, 224);
  font-size: 12px;
}
.bottom {
  padding-bottom: 20px;
  box-shadow: 0 2px 2px rgb(224, 217, 217);
}
</style>
