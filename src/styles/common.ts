import { Dimensions, Platform } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
// export const windowWidth = width > height ? width : height;
// export const windowHeight = width > height ? height : width;
export const deviceWidth = width;
export const deviceHeight = height;

export const screenWidth = Dimensions.get("screen").width;
export const screenHeight = Dimensions.get("screen").height;

export const bigAxis = screenWidth > screenHeight ? screenWidth : screenHeight;
export const smallAxis =
  screenWidth < screenHeight ? screenWidth : screenHeight;

export const isAndroid = Platform.OS === "android";
export const isIos = Platform.OS === "ios";
