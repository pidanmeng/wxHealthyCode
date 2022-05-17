import { useEffect } from 'react';
import { View } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro';
import './index.scss'


export default function Page() {

  const goCheckHealthyCode = () => {
    Taro.scanCode({
      success: () => {
        Taro.navigateTo({
          url: 'healthyCode/index'
        })
      },
      fail: () => {
        Taro.navigateTo({
          url: 'healthyCode/index'
        })
      }
    });
  }

  useDidShow(goCheckHealthyCode)

  return (
    <View className='app'></View>
  )
}
