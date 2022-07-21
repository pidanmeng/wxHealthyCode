import { View, Input, OpenData, Image } from "@tarojs/components";
import style from "./index.module.scss";
import { useEmployeeInfo } from "../../../hooks/useEmployeeInfo";
import { useState } from "react";
import FitnessSlogan from "../../../assets/fitness-slogan.png";

export default function Page() {
  const { employeeInfo, setEmployeeName, setEmployeeId } = useEmployeeInfo();
  const [fitnessAmount, setFitnessAmount] = useState(16);
  const [currentAmount, setCurrentAmount] = useState(7);
  const [isChecked, setIsChecked] = useState(false);

  const saveEmployeeName = (e) => {
    const name = e?.detail?.value;
    setEmployeeName(name);
  };

  const saveEmployeeId = (e) => {
    const id = e?.detail?.value;
    setEmployeeId(id);
  };

  const handleCheckIn = () => {
    setFitnessAmount(fitnessAmount + 1);
    setCurrentAmount(currentAmount + 1);
    setIsChecked(true);
  };

  return (
    <View className={style.app}>
      <View className={style.bg}>
        <View className={style.fitnessMainPic}></View>
      </View>
      <View className={style.tabs}>
        <View className={style.tab}>健身房</View>
        <View className={style.tab}>课程</View>
      </View>
      <View className={style.card}>
        <View className={style.userInfo}>
          <OpenData className={style.avatar} type="userAvatarUrl" />
          <View className={style.employeeInfo}>
            <View className={style.nameWrapper}>
              <Input
                onInput={saveEmployeeName}
                className={style.name}
                value={employeeInfo.name}
              />
              <View className={`${style.namePlaceholder} ${style.name}`}>
                {employeeInfo.name}
              </View>
            </View>
            <View className={style.idWrapper}>
              <Input
                onInput={saveEmployeeId}
                className={style.id}
                value={employeeInfo.id}
              />
              <View className={`${style.idBorder} ${style.id}`}>
                {employeeInfo.id}
              </View>
            </View>
          </View>
        </View>
        <View className={style.amount}>
          <View className={style.fitnessAmount}>健身房签到总累计次数</View>
          <View className={style.fitnessAmountBoard}>
            {[...String(fitnessAmount).padStart(3, "0")].map(
              (number: string, index: number) => {
                return (
                  <View key={index} className={style.number}>
                    {number}
                  </View>
                );
              }
            )}
          </View>
          <View className={style.currentAmount}>
            当前健身房签到累计次数{currentAmount}
          </View>
        </View>
        <View className={style.buttonWrapper}>
          {isChecked ? (
            <View className={style.overCheckIn}>签到成功</View>
          ) : (
            <View onClick={handleCheckIn} className={style.checkInButton}>
              我要签到
            </View>
          )}
        </View>
        <View className={style.shadow}></View>
      </View>
      <View className={style.sloganWrapper}>
        <Image
          className={style.slogan}
          mode="widthFix"
          src={FitnessSlogan}
        ></Image>
      </View>
    </View>
  );
}
