<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="" @load="swiperImgLoad" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper.vue";
import SwiperItem from "components/common/swiper/SwiperItem.vue";
export default {
  name: "DetailSwiper",
  components: { Swiper, SwiperItem },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
    swiperImgLoad() {
      if (!this.isLoad) {
        this.$emit("imgLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
}
img {
  width: 100%;
}
</style>
