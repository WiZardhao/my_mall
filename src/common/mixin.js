export const backTopMixin = {
  data() {
    return {
      isShowBack: false,
    };
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
};
