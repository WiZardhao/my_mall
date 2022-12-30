<template>
  <div class="hy-swiper">
    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <slot></slot>
    </div>
    <div class="indicator" v-if="showIndicator && slideCount > 1">
      <div
        class="indicator-item"
        v-for="(item, index) in slideCount"
        :key="index"
        :class="{ active: index === currentIndex - 1 }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      totalWidth: 0,
      swiperStyle: {},
      slideCount: 0,
      currentIndex: 1,
      scrolling: false,
    };
  },
  props: {
    interval: {
      type: Number,
      default() {
        return 3000;
      },
    },
    animationDelay: {
      type: Number,
      default() {
        return 300;
      },
    },
    moveRatio: {
      type: Number,
      default() {
        return 0.25;
      },
    },
    showIndicator: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    }, 200);
  },
  methods: {
    handleDom() {
      const swiperEl = document.getElementsByClassName("swiper")[0];
      const swiperEls = document.getElementsByClassName("slide");

      this.slideCount = swiperEls.length;

      if (this.slideCount > 1) {
        let firstNode = swiperEls[0].cloneNode(true);
        let lastNode = swiperEls[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(lastNode, swiperEls[0]);
        swiperEl.appendChild(firstNode);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }
      this.setTransform(-this.totalWidth);
    },
    setTransform(position) {
      this.swiperStyle.transfrom = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle["-webkit-transform"] = `translate3d(${position}px, 0,0)`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px, 0, 0)`;
    },
    startTimer() {
      window.playTimer = setInterval(() => {
        this.currentIndex++;
        this.scrollContent(this.currentIndex);
      }, this.interval);
    },
    stopTimer() {
      clearInterval(window.playTimer);
    },
    scrollContent(currentIndex) {
      this.scrolling = true;
      this.swiperStyle.transition = "transform " + this.animationDelay + "ms";
      this.setTransform(-currentIndex * this.totalWidth);
      this.checkPosition();
      this.scrolling = false;
    },
    checkPosition() {
      window.setTimeout(() => {
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex > this.slideCount) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex === 0) {
          this.currentIndex = 4;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
      }, this.animationDelay);
    },
    touchStart(event) {
      if (this.scrolling) return;
      this.stopTimer();
      this.startX = event.touches[0].pageX;
    },
    touchMove(event) {
      this.moveX = event.touches[0].pageX;
      this.distance = this.moveX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = currentPosition + this.distance;
      this.setTransform(moveDistance);
    },
    touchEnd(event) {
      let absDistance = Math.abs(this.distance);
      if (absDistance === 0) {
        return;
      } else if (
        this.distance < 0 &&
        absDistance > this.totalWidth * this.moveRatio
      ) {
        this.currentIndex++;
      } else if (
        this.distance > 0 &&
        absDistance > this.totalWidth * this.moveRatio
      ) {
        this.currentIndex--;
      }
      this.scrollContent(this.currentIndex);
      this.startTimer();
    },
  },
};
</script>

<style>
.hy-swiper {
  overflow: hidden;
  position: relative;
}
.swiper {
  display: flex;
}
.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  width: 100%;
}
.indicator-item {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: white;
}
.indicator-item.active {
  background-color: rgb(194, 37, 69);
}
</style>
