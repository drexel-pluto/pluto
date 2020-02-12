import { Dimensions, PixelRatio } from 'react-native'
import { useResponsiveWidth } from 'react-native-responsive-dimensions'

const WINDOW_WIDTH = Dimensions.get('window').width
const guidelineBaseWidth = 375

export const scaleSize = size => (WINDOW_WIDTH / guidelineBaseWidth) * size

export const scaleFont = size => size * PixelRatio.getFontScale()

export const resWidthPercent = percentage => useResponsiveWidth(percentage) // responsive to screen width

export const resHeightPercent = percentage => useResponsiveHeight(percentage) // responsive to screen height
