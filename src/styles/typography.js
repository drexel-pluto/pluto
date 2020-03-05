import { scaleFont } from './mixins'
import { TEXT_PRIMARY } from './colors'

// FONT SIZE
export const F_SIZE_24 = scaleFont(24)
export const F_SIZE_20 = scaleFont(20)
export const F_SIZE_18 = scaleFont(18)
export const F_SIZE_16 = scaleFont(16)
export const F_SIZE_14 = scaleFont(14)

// LINE HEIGHT
export const F_LH_40 = scaleFont(40)
export const F_LH_32 = scaleFont(32)
export const F_LH_28 = scaleFont(28)
export const F_LH_24 = scaleFont(24)
export const F_LH_18 = scaleFont(18)

// FONT WEIGHT STYLE
export const F_BOLD = {
  fontFamily: 'europa-bold',
}
export const F_REGULAR = {
  fontFamily: 'europa-regular',
}
export const F_LIGHT = {
  fontFamily: 'europa-light',
}

// HEADING STYLES
export const F_H1 = {
  color: TEXT_PRIMARY,
  fontSize: F_SIZE_24,
  lineHeight: F_LH_40,
  fontFamily: 'europa-bold',
}

export const F_H2 = {
  color: TEXT_PRIMARY,
  fontSize: F_SIZE_20,
  lineHeight: F_LH_32,
  fontFamily: 'europa-regular',
}

export const F_H3 = {
  color: TEXT_PRIMARY,
  fontSize: F_SIZE_18,
  lineHeight: F_LH_32,
  fontFamily: 'europa-bold',
}

export const F_BODY = {
  color: TEXT_PRIMARY,
  fontSize: F_SIZE_18,
  lineHeight: F_LH_28,
  fontFamily: 'europa-regular',
}

export const F_SUBTITLE = {
  color: TEXT_PRIMARY,
  fontSize: F_SIZE_16,
  lineHeight: F_LH_24,
  fontFamily: 'europa-regular',
}

export const F_CAPTION = {
  color: TEXT_PRIMARY,
  fontSize: F_SIZE_14,
  lineHeight: F_LH_18,
  fontFamily: 'europa-regular',
}
