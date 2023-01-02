import { request } from "./request";

export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid,
    },
  });
}

export function getRecommend() {
  return request({
    url: "/recommend",
  });
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.nowPrice = itemInfo.price;
    this.oldPrice = itemInfo.highPrice;
    this.realPrice = itemInfo.lowNowPrice;
    this.discount = itemInfo.discountDesc;
    this.disBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class ItemInfo {
  constructor(info, rule) {
    this.img = info.images ? info.images : "";
    this.set = info.set;
    this.rule = rule.tables[0];
  }
}
