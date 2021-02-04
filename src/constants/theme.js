import get from "lodash/get"

export const theme = {
  colors: {
    mainBackground: '#2a2b30',
    navbar: '#1f2023',
    red: '#ff4e3d',
    white: '#fdfdff',
    grey: '#666',
    darkGrey: '#444444',
    aboutTitle: '#2c2d32',
    formText: '#ccc'
  },
  fonts: {
    mainTitle: '900 40px Poppins, sans-serif;',
    pageHeading: '800 46px Poppins-Bold, sans-serif;',
    logo: '600 36px Poppins-Bold, sans-serif;',
    menuLinks: '600 13px Poppins, sans-serif;',
    aboutTitle: '800 32px Poppins-Bold,sans-serif;',
    aboutSubtitle: '600 14px Titillium Web,sans-serif;',
    aboutText: '15px Poppins,sans-serif;',
    formTitle: '600 36px Titillium Web,sans-serif;',
    inputText: '16px Poppins,sans-serif;',
    expirienceBlockTitle: '800 20px Poppins-Bold, sans-serif;',
    expirienceBlockSubtitle: '800 14px Poppins,sans-serif;',
    projectTitle: '800 22px Poppins-Bold, sans-serif;',
    projectText: '800 16px Poppins-Bold, sans-serif;',
  },
}

export function themeVar(path) {
  return () => get(theme, path)
}

export function font(fontKey) {
  return themeVar(`fonts.${fontKey}`)
}

export function color(colorKey) {
  return themeVar(`colors.${colorKey}`)
}
