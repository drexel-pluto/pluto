export const GRAY_LIGHT = '#dbdbdb'
export const GRAY_MEDIUM = '#adadad'
export const GRAY_DARK = '#7d7d7d'

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
