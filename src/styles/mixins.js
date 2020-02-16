import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native'
import { useResponsiveWidth } from 'react-native-responsive-dimensions'

const { height, width } = Dimensions.get('window')
const guidelineBaseWidth = 375

export const scaleSize = size => (width / guidelineBaseWidth) * size

export const scaleFont = size => size * PixelRatio.getFontScale()

export const resWidthPercent = percentage => useResponsiveWidth(percentage) // responsive to screen width

export const resHeightPercent = percentage => useResponsiveHeight(percentage) // responsive to screen height

// getting statusbar height
const X_WIDTH = 375
const X_HEIGHT = 812

const XSMAX_WIDTH = 414
const XSMAX_HEIGHT = 896

export const isIPhoneX = () =>
  Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? (width === X_WIDTH && height === X_HEIGHT) ||
      (width === XSMAX_WIDTH && height === XSMAX_HEIGHT)
    : false

export const getStatusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0,
})
