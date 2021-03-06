import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { View, Image, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

export default function Page() {
  const [time, setTime] = useState(dayjs(Date.now()).format("HH:mm:ss"));
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
      setTime(dayjs(Date.now()).format("HH:mm:ss"));
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
      <View className="card">
        <Image
          className="logo"
          src="https://lf3-static.bytednsdoc.com/obj/eden-cn/bpxnupqnult/logo.png"
        />
        <View className="qrCodeWrapper">
          <View className="qrCodeButton">
            <Image
              className="qrCodeIcon"
              src="https://lf3-static.bytednsdoc.com/obj/eden-cn/bpxnupqnult/qrcode.png"
            ></Image>
          </View>
        </View>
        <View className="topContent">
          <View className="date">
            {dayjs(Date.now()).format("YYYY???MM???DD???")}
          </View>
          <View className="time">{time}</View>
        </View>
        <View className="avatarWrapper">
          <View className="dotGroup top">
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
            <View className="qrCodeIcon"></View>
            <View className="qrCodeDesc">
              <View className="qrCodeDescText">??????</View>
            </View>
          </View>
          <View className="content">????????????</View>
          <Image
            className="tip"
            src="https://lf3-static.bytednsdoc.com/obj/eden-cn/bpxnupqnult/dd_tips.png"
          />
        </View>
        <Image
          className="hsCard"
          mode="widthFix"
          src="https://lf3-static.bytednsdoc.com/obj/eden-cn/bpxnupqnult/hsCard.png"
        ></Image>
      </View>
      <View className="card userInfo">
        <View className="keys">
          <View className="key">
            <View className="keyText">
              ???<Text></Text>???
            </View>
          </View>
          <View className="key">
            <View className="keyText">????????????</View>
          </View>
          <View className="key">
            <View className="keyText">????????????</View>
          </View>
          <View className="key">
            <View className="keyText">????????????</View>
          </View>
        </View>
        <View className="values">
          <View className="value">???**</View>
          <View className="value">32**************35</View>
          <View className="value">
            {dayjs(Date.now()).format("MM-DD 10:42")}
          </View>
          <View className="value">
            {dayjs(Date.now()).format("MM-DD 24:00")}
          </View>
        </View>
      </View>
      <View className="buttonBack">????????????</View>
    </View>
  );
}
