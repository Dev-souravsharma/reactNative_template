import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

export const scale = SCREEN_WIDTH / 380;

export const responsiveFont = (fontSize: number) => {
  const newSize = fontSize * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const guidelineBaseWidth = 350;
export const guidelineBaseHeight = 680;

export const scaleSize = (size: number) =>
  (SCREEN_WIDTH / guidelineBaseWidth) * size;

export const moderateScale = (size: number, factor = 0.5) => {
  return size + (scaleSize(size) - size) * factor;
};

export const isIPhoneX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  (SCREEN_HEIGHT === 780 ||
    SCREEN_WIDTH === 780 ||
    SCREEN_HEIGHT === 812 ||
    SCREEN_WIDTH === 812 ||
    SCREEN_HEIGHT === 844 ||
    SCREEN_WIDTH === 844 ||
    SCREEN_HEIGHT === 896 ||
    SCREEN_WIDTH === 896 ||
    SCREEN_HEIGHT === 926 ||
    SCREEN_WIDTH === 926);

export const StatusBarHeight = Platform.select({
  ios: isIPhoneX ? moderateScale(40) : moderateScale(30),
  android: StatusBar.currentHeight,
  default: 0,
});

export const BaseStyle = {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
};
