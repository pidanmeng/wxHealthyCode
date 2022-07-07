import { View, Image } from "@tarojs/components";
import style from "./index.module.scss";

type IPropsIndexCard = {
  onClick?: () => void;
  icon: string;
  title: string;
};

export const IndexCard = (props: IPropsIndexCard) => {
  const { icon = "", title = "", onClick = () => {} } = props;
  return (
    <View onClick={onClick} className={style.card}>
      <Image mode="aspectFill" className={style.icon} src={icon}></Image>
      <View className={style.title}>{title}</View>
    </View>
  );
};
