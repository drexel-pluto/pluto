import { scaleSize, getStatusBarHeight } from './mixins'

// Flex
export const FLEX_CONTAINER = {
  flex: 1,
}

export const FLEX_CONTAINER_CENTER = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}

// Spacing
// -- General
export const PAD_HORZ = scaleSize(20)
export const PAD_VERT = scaleSize(10)

// -- Header
export const HEAD_PAD_VERT = scaleSize(10) + getStatusBarHeight
