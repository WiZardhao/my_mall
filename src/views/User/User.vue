<template>
  <div class="user">
    <nav-bar class="nav-bar">
      <div slot="center">个人中心</div>
    </nav-bar>
    <scroll class="scroll-height">
      <login />
      <money />
      <div class="line"></div>
      <user-list />
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import Login from "./childComponents/Login";
import Money from "./childComponents/Money";
import UserList from "./childComponents/UserList";
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Profile",
  components: { Scroll, UserList, Money, Login, NavBar },
};
</script>

<style scoped>
.user {
  width: 100%;
  height: 100%;
}

.nav-bar {
  font-weight: 600;
  color: white;
  background-color: #ff8198;
}

.line {
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
}

.scroll-height {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 0;
  overflow: hidden;
}
</style>
