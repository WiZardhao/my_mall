<template>
  <div class="user-list">
    <div class="user-list-item">
      <i class="fa fa-envelope-o" />
      <span>我的消息</span>
    </div>
    <div class="user-list-item">
      <i class="fa fa-database" />
      <span>积分商城</span>
    </div>
    <div class="user-list-item">
      <i class="fa fa-id-card-o" />
      <span style="border-bottom: 0">会员卡</span>
    </div>
    <div class="line"></div>
    <div class="user-list-item">
      <i class="fa fa-shopping-cart" />
      <span>我的购物车</span>
    </div>
    <div class="user-list-item">
      <i class="fa fa-download" />
      <span>下载购物APP</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserList",
};
</script>

<style scoped>
.user-list {
  width: 100%;
}

.user-list-item {
  line-height: 45px;
  display: flex;
  align-items: center;
  height: 45px;
  padding-left: 20px;
}

.user-list-item .user-list-icon {
  font-size: 24px;
  display: inline-block;
  margin-right: 7px;
}

.user-list-item span {
  font-size: 16px;
  display: inline-block;
  width: 100%;
  color: #666;
  border-bottom: 1px solid #dddddd;
}

.line {
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
}
span {
  margin-left: 10px;
}
.fa {
  color: var(--color-tint);
}
</style>
