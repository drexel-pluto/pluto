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

export const PAD_HORZ_SM = scaleSize(10)

export const PAD_BOTTOM = scaleSize(20)

// -- Header
export const HEAD_PAD_VERT = scaleSize(10) + getStatusBarHeight

// -- Bottom Els
export const BOTTOM_WRAPPER_LEFT = {
  position: 'absolute',
  bottom: '6%',
  width: 'auto',
  left: 0,
  paddingHorizontal: PAD_HORZ,
}

export const BOTTOM_WRAPPER_RIGHT = {
  position: 'absolute',
  bottom: '6%',
  width: 'auto',
  right: 0,
  paddingHorizontal: PAD_HORZ,
}

export const BOTTOM_WRAPPER_CENTER = {
  position: 'absolute',
  bottom: '6%',
  width: 'auto',
  left: 0,
  right: 0,
  paddingHorizontal: PAD_HORZ,
}
