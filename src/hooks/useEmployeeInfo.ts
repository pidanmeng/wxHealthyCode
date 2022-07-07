import { EMPLOYEE_INITIAL_INFO } from "../constant";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";

export function useEmployeeInfo() {
  const [employeeInfo, setEmployeeInfo] = useState(EMPLOYEE_INITIAL_INFO);

  const setEmployeeName = (name: string) => {
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

  const setEmployeeId = (id: string) => {
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

  const setEmployeeAvatar = (avatar: string) => {
    setEmployeeInfo((preValue) => {
      const tempRes = {
        ...preValue,
        avatar: avatar,
      };
      Taro.setStorage({
        key: "employeeInfo",
        data: tempRes,
      });
      return tempRes;
    });
  };

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

  return {
    employeeInfo,
    setEmployeeInfo,
    setEmployeeName,
    setEmployeeId,
    setEmployeeAvatar,
  };
}
