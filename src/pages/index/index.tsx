import { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { IndexCard } from "./components/indexCard";
import ScanCode from "../../assets/scan-code.png";
import Healthy from "../../assets/healthy.png";
import Fitness from "../../assets/fitness.png";
import Employee from "../../assets/employees.png";
import { AtModal } from "taro-ui";
import "./index.scss";
import { goPage, goScanPage } from "../../utils/tools";

export default function Page() {
  const [windowInfo] = useState(Taro.getWindowInfo());
  const [buttonRect] = useState(Taro.getMenuButtonBoundingClientRect());
  useEffect(() => {
    console.log(windowInfo, buttonRect);
  }, []);

  return (
    <View className="app">
      <AtModal
        isOpened
        title="免责声明"
        confirmText="确认"
        content="本小程序仅供个人学习使用，任何组织和个人不得公开传播或用于任何商业盈利、违法用途，否则一切后果由该组织或个人承担。制作者不承担任何法律及连带责任！"
      />
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
          onClick={() => goPage("healthyCodeScan/index")}
          icon={ScanCode}
          title="本人信息扫码登记"
        ></IndexCard>
        <IndexCard
          onClick={() => goScanPage("healthyCode/index")}
          icon={Healthy}
          title="本人健康码自查询"
        ></IndexCard>
        <IndexCard
          onClick={() => goScanPage("employeeScan/index")}
          icon={Employee}
          title="字节员工扫码登记"
        ></IndexCard>
        <IndexCard
          onClick={() => goScanPage("fitnessScan/index")}
          icon={Fitness}
          title="字节健身扫码登记"
        ></IndexCard>
      </View>
      <View className="bg"></View>
    </View>
  );
}
