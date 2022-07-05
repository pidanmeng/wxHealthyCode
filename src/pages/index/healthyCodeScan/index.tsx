import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { View, Image, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import QRCodeBlue from "../../../assets/qrcode-blue.png";
import HelpWhite from "../../../assets/help-white.png";
import "./index.scss";
import HSInfo from "../../../assets/hsInfo.jpg";

const DateFormatRule = "YYYY-MM-DD HH:mm:ss";

export default function Page() {
  const [time, setTime] = useState(dayjs(Date.now()).format(DateFormatRule));
  const [avatar, setAvatar] = useState(
    "https://i0.hdslb.com/bfs/article/2df02beebe3318ac1b052598721bcb07934d3d84.jpg@942w_945h_progressive.webp"
  );

  useEffect(() => {
    const innerAudioContext = Taro.createInnerAudioContext();
    innerAudioContext.autoplay = true;
    innerAudioContext.src =
      "https://lf3-static.bytednsdoc.com/obj/eden-cn/bpxnupqnult/adopt.m4a";

    try {
      Taro.getStorage({
        key: "avatar",
        success: (res) => {
          console.log(res.data);
          setAvatar(res.data);
        },
      });
    } catch (e) {
      console.error(e);
    }

    const interval = setInterval(() => {
      setTime(dayjs(Date.now()).format(DateFormatRule));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const selectAvatar = () => {
    Taro.chooseMedia({
      count: 1,
      mediaType: ["image"],
      sourceType: ["album", "camera"],
      success: (res) => {
        console.log(res);
        const tempAvatar = res.tempFiles?.[0]?.tempFilePath;
        setAvatar(tempAvatar);
        Taro.setStorage({
          key: "avatar",
          data: tempAvatar,
        });
      },
    });
  };

  return (
    <View className="app">
      <View className="healthyCode">
        <View className="topBar"></View>
      </View>
      <View className="cardTop">
        <Image
          className="logo"
          src="https://lf3-static.bytednsdoc.com/obj/eden-cn/bpxnupqnult/logo.png"
        />
        <Image className="qrCodeIcon" src={QRCodeBlue}></Image>
        <View className="topContent">
          <View className="name">王*</View>
          <View className="idCard">32**************35</View>
        </View>
      </View>
      <View className="cardMiddle">
        <View className="avatarWrapper">
          <View className="dotGroup top">
            {Array(11)
              .fill(undefined)
              .map((_item, index) => {
                return <View key={index} className="dot" />;
              })}
          </View>
          <View className="dotGroup bottom">
            {Array(11)
              .fill(undefined)
              .map((_item, index) => {
                return (
                  <View key={index} className="dot">
                    {}
                  </View>
                );
              })}
          </View>
          <View className="dotGroup left">
            {Array(11)
              .fill(undefined)
              .map((_item, index) => {
                return (
                  <View key={index} className="dot">
                    {}
                  </View>
                );
              })}
          </View>
          <View className="dotGroup right">
            {Array(11)
              .fill(undefined)
              .map((_item, index) => {
                return (
                  <View key={index} className="dot">
                    {}
                  </View>
                );
              })}
          </View>
          <Image
            mode="aspectFill"
            className="avatar"
            src={avatar}
            onClick={selectAvatar}
          ></Image>
        </View>
        <View className="coreTips">
          <View className="qrCodeIconWrapper">
            <View className="qrCodeIconGreen"></View>
            <View className="qrCodeDesc">
              <View className="qrCodeDescText">绿码</View>
            </View>
          </View>
          <View className="content">扫码未见异常</View>
          <Image mode="aspectFill" className="tip" src={HelpWhite}></Image>
        </View>
        <View className="time">{time}</View>
      </View>
      <View className="cardBottom">
        <Image mode="widthFix" className="hsInfo" src={HSInfo}></Image>
      </View>
      <View className="buttonBack">返回首页</View>
      <View className="sign">北京市大数据中心</View>
    </View>
  );
}
