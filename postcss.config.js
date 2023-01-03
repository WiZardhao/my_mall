module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, //视口的宽度，对应的时设计稿的宽度/2，一般为750，对应iPhone6的宽度
      viewportHeight: 667, //视口的高度，对应的是设计稿的高度（也可以不配置）
      unitPrecision: 5, //指定‘px’转换为视口单位值的小数位数（很多时候无法整除）小数位为5位
      viewportUnit: "vw", //指定需要转换成的视口单位，建议使用vw(宽度)
      selectorBlankList: ["ignore"], //指定不需要转换的类（class类名，使用ignore，在元素的class里加入ignore，则该元素里的px不会进行转化）
      minPixelValue: 1, //小于或等于‘1px’不转换为视口单位
      mediaQuery: false, //允许在媒体查询中转换为‘px’,使用媒体查询，再对一些东西进行配置
      exclude: [/TabBar/], //不需要转化的组件文件名正则，必须是正则表达式
    },
  },
};
