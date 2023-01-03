<template>
  <div class="comment" v-if="Object.keys(commentInfo).length !== 0">
    <div class="showMore">
      <div class="userComment">用户评价</div>
      <div class="more">
        <div>更多</div>
        <div class="fa-contain">
          <div class="fa fa-angle-right"></div>
        </div>
      </div>
    </div>
    <div class="user">
      <div class="userImg">
        <img :src="commentInfo.user.avatar" alt="" />
      </div>
      <div class="userName">{{ commentInfo.user.uname }}</div>
    </div>
    <div class="content">
      <div class="comment">{{ commentInfo.content }}</div>
      <div class="img" v-if="isHasImg">
        <div v-for="item in commentInfo.images">
          <img :src="item" alt="" />
        </div>
      </div>
      <div class="date-detail">
        <div class="date">{{ calcDate }}</div>
        <div class="detail">{{ commentInfo.style }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { DateFormat } from "@/common/utils";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    calcDate() {
      return DateFormat(this.commentInfo.created);
    },
    isHasImg() {
      return Boolean(this.commentInfo.images);
    },
  },
};
</script>

<style scoped>
.showMore {
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 2px rgb(224, 217, 217);
}
.more {
  display: flex;
  font-size: 14px;
}
.fa-contain {
  margin-left: 5px;
  margin-top: -2px;
}
.user {
  display: flex;
  padding: 15px;
}
.userImg img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgb(227, 224, 224);
}
.userName {
  margin: 10px 0 0 10px;
  font-size: 14px;
}
.content {
  padding: 0 15px 20px 15px;
  font-size: 14px;
  color: rgb(126, 125, 124);
  box-shadow: 0 2px 2px rgb(224, 217, 217);
}
.comment {
  padding-bottom: 5px;
}
.date-detail {
  font-size: 12px;
  display: flex;
  padding-top: 5px;
}
.date {
  margin-right: 10px;
}
.img {
  display: flex;
}
.img img {
  width: 80px;
  height: 80px;
  margin-right: 5px;
}
</style>
