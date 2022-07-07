import Taro from "@tarojs/taro";

export function goScanPage(path: string) {
  Taro.scanCode({
    success: () => {
      Taro.navigateTo({
        url: path,
      });
    },
    fail: () => {
      Taro.showToast({
        title: "二维码失效",
        icon: "none",
      });
    },
  });
}
export function goPage(path: string) {
  Taro.navigateTo({
    url: path,
  });
}
