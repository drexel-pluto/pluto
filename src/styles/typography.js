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

// HEADING STYLES

export const F_H1 = {
  fontSize: F_SIZE_24,
  fontWeight: F_WEIGHT_BOLD,
}

export const F_H2 = {
  fontSize: F_SIZE_20,
  fontWeight: F_WEIGHT_REGULAR,
}

export const F_H3 = {
  fontSize: F_SIZE_20,
  fontWeight: F_WEIGHT_BOLD,
}

export const F_BODY = {
  fontSize: F_SIZE_18,
  fontWeight: F_WEIGHT_REGULAR,
}
