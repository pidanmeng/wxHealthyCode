export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/index/healthyCode/index",
    "pages/index/healthyCodeScan/index",
    "pages/index/employeeScan/index",
    "pages/index/fitnessScan/index",
  ],
  window: {
    backgroundColor: "#f6f6f6",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#4287fd",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "white",
  },
  lazyCodeLoading: "requiredComponents",
});
