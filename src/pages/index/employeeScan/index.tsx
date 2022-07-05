import { View, Image, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import BytedanceLogo from "../../../assets/bytedance-logo.png";
import IDCardAuthority from "../../../assets/id-card-authority.png";
import IDCardLost from "../../../assets/id-card-lost.png";
import style from "./index.module.scss";

export default function Page() {
  const [buttonRect] = useState(Taro.getMenuButtonBoundingClientRect());
  const [employeeInfo, setEmployeeInfo] = useState({
    name: "点击输入姓名",
    id: "点击输入7位数字工号",
    avatar:
      "https://i0.hdslb.com/bfs/article/2df02beebe3318ac1b052598721bcb07934d3d84.jpg@942w_945h_progressive.webp",
  });
  useEffect(() => {
    try {
      Taro.getStorage({
        key: "employeeInfo",
        success: (res) => {
          setEmployeeInfo(res.data);
        },
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const saveEmployeeName = (e) => {
    const name = e?.detail?.value;
    setEmployeeInfo((preValue) => {
      const tempRes = {
        ...preValue,
        name,
      };
      Taro.setStorage({
        key: "employeeInfo",
        data: tempRes,
      });
      return tempRes;
    });
  };

  const saveEmployeeId = (e) => {
    const id = e?.detail?.value;
    setEmployeeInfo((preValue) => {
      const tempRes = {
        ...preValue,
        id,
      };
      Taro.setStorage({
        key: "employeeInfo",
        data: tempRes,
      });
      return tempRes;
    });
  };

  const selectAvatar = () => {
    Taro.chooseMedia({
      count: 1,
      mediaType: ["image"],
      sourceType: ["album", "camera"],
      success: (res) => {
        console.log(res);
        const tempAvatar = res.tempFiles?.[0]?.tempFilePath;
        setEmployeeInfo((preValue) => {
          const tempRes = {
            ...preValue,
            avatar: tempAvatar,
          };
          Taro.setStorage({
            key: "employeeInfo",
            data: tempRes,
          });
          return tempRes;
        });
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
