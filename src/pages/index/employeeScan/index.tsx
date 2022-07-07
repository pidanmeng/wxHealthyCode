import { useEmployeeInfo } from "../../../hooks/useEmployeeInfo";
import { View, Image, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import BytedanceLogo from "../../../assets/bytedance-logo.png";
import IDCardAuthority from "../../../assets/id-card-authority.png";
import IDCardLost from "../../../assets/id-card-lost.png";
import style from "./index.module.scss";

export default function Page() {
  const [buttonRect] = useState(Taro.getMenuButtonBoundingClientRect());
  const { employeeInfo, setEmployeeName, setEmployeeId, setEmployeeAvatar } =
    useEmployeeInfo();

  const saveEmployeeName = (e) => {
    const name = e?.detail?.value;
    setEmployeeName(name);
  };

  const saveEmployeeId = (e) => {
    const id = e?.detail?.value;
    setEmployeeId(id);
  };

  const selectAvatar = () => {
    Taro.chooseMedia({
      count: 1,
      mediaType: ["image"],
      sourceType: ["album", "camera"],
      success: (res) => {
        console.log(res);
        const tempAvatar = res.tempFiles?.[0]?.tempFilePath;
        setEmployeeAvatar(tempAvatar);
      },
    });
  };
  return (
    <View className={style.app}>
      <View
        className={style.container}
        style={{
          paddingTop: `${buttonRect.top}px`,
        }}
      >
        <View
          className={style.title}
          style={{
            height: `${buttonRect.height}px`,
          }}
        >
          <View className={style.help}>帮助</View>
          我的工卡
        </View>
        <View className={style.idCard}>
          <Image
            mode="widthFix"
            className={style.logo}
            src={BytedanceLogo}
          ></Image>
          <Input
            onBlur={saveEmployeeName}
            className={style.employeeName}
            value={employeeInfo.name}
          />
          <Input
            onBlur={saveEmployeeId}
            className={style.employeeId}
            value={employeeInfo.id}
          />
          <Image
            mode="aspectFill"
            className={style.avatar}
            src={employeeInfo.avatar}
            onClick={selectAvatar}
          ></Image>
        </View>
        <View className={style.buttonGroup}>
          <View className={style.button}>
            <Image
              mode="aspectFill"
              src={IDCardAuthority}
              className={style.buttonIcon}
            />
            <View className={style.buttonText}>门禁权限</View>
          </View>
          <View className={style.button}>
            <Image
              mode="aspectFill"
              src={IDCardLost}
              className={style.buttonIcon}
            />
            <View className={style.buttonText}>挂失工卡</View>
          </View>
        </View>
      </View>
    </View>
  );
}
