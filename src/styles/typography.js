import { scaleFont } from './mixins'

// FONT WEIGHT
export const F_WEIGHT_REGULAR = '400'
export const F_WEIGHT_BOLD = '700'

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

// HEADING STYLES
export const F_H1 = {
  fontSize: F_SIZE_24,
  fontWeight: F_WEIGHT_BOLD,
  lineHeight: F_LH_40,
}

export const F_H2 = {
  fontSize: F_SIZE_20,
  fontWeight: F_WEIGHT_REGULAR,
  lineHeight: F_LH_32,
}

export const F_H3 = {
  fontSize: F_SIZE_18,
  fontWeight: F_WEIGHT_BOLD,
  lineHeight: F_LH_32,
}

export const F_BODY = {
  fontSize: F_SIZE_18,
  fontWeight: F_WEIGHT_REGULAR,
  lineHeight: F_LH_28,
}

export const F_SUBTITLE = {
  fontSize: F_SIZE_16,
  fontWeight: F_WEIGHT_REGULAR,
  lineHeight: F_LH_24,
}

export const F_CAPTION = {
  fontSize: F_SIZE_14,
  fontWeight: F_WEIGHT_REGULAR,
  lineHeight: F_LH_18,
}
