import hexToRgba from 'hex-to-rgba'

export const GRAY_LIGHT = '#dbdbdb'
export const GRAY_MEDIUM = '#adadad'
export const GRAY_DARK = '#7d7d7d'

export const TRANSPARENT = 'rgba(255,255,255,0)'

export const PLUTO_WHITE = '#f7f5f5'

export const BLACK_ROCK = '#0C0443'
export const PEARL = '#F6F6FA'
export const CREAM = '#FFFDFA'

export const VIOLET = {
  dark: '#603ADE',
  med: '#A893EF',
  light: '#ECE7FF',
}

export const MELON = {
  dark: '#DD5AA1',
  med: '#F4BBC9',
  light: '#FFEDF7',
}

export const CARBONE = {
  dark: '#3AA395',
  med: '#70E2D4',
  light: '#DAFEF9',
}

export const BLUE = {
  dark: '#354B9C',
  med: '#B0B6FF',
  light: '#EFF0FF',
}

export const CREAMSICLE = {
  dark: '#F38250',
  med: '#FBD9B2',
  light: '#FFFAEE',
}

// text
export const TEXT_PRIMARY = BLACK_ROCK
export const TEXT_SECONDARY = '#9EA2AE'

// general usage
export const ACCENT = VIOLET.dark
export const UI_BG = ['white', '#F4F1FF']

// functions return array of two colors: [ start color, end color ]
// example usage: gradient.dark(CREAMSICLE)[0]
export const gradient = {
  dark: function(color) {
    return [color.dark, color.med]
  },
  light: function(color) {
    return [color.med, color.light]
  },
}

// funcctions to return rgba from our color system
export const rgba = (color, opacity) => {
  return hexToRgba(color, opacity)
}
