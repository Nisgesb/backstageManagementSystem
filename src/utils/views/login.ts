// 根据当前时间判断上下午
export const getTimePeriod = () => {
  const currentHour = new Date().getHours();
  if (currentHour >= 5 && currentHour <= 9) {
    return "早上";
  } else if (currentHour > 9 && currentHour <= 12) {
    return "上午";
  } else if (currentHour > 12 && currentHour <= 18) {
    return "下午";
  } else {
    return "晚上";
  }
};
