import { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { IndexCard } from "./components/indexCard";
import ScanCode from "../../assets/scan-code.png";
import "./index.scss";
import { goPage } from "../../utils/tools";

export default function Page() {
  const [windowInfo] = useState(Taro.getWindowInfo());
  const [buttonRect] = useState(Taro.getMenuButtonBoundingClientRect());
  useEffect(() => {
    console.log(windowInfo, buttonRect);
  }, []);

  return (
    <View className="app">
      <View
        className="container"
        style={{
          paddingTop: `${buttonRect.top}px`,
        }}
      >
        <View
          className="title"
          style={{
            height: `${buttonRect.height}px`,
          }}
        >
          北京健康宝
        </View>
        <IndexCard
          onClick={() => goPage("healthyCode/index")}
          icon={ScanCode}
          title="本人健康码自查询"
        ></IndexCard>
      </View>
      <View className="bg"></View>
    </View>
  );
}
