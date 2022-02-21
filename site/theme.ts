import { hypostyle as hypo } from 'hypostyle'
import * as presets from 'hypostyle/presets'
import { configure } from 'hypobox'

export const hypostyle = hypo({
  ...presets,
  tokens: {
    ...presets.tokens,
    fontFamily: {
      sans: `'Inter', sans-serif`,
      man: `'Manrope', sans-serif`,
    },
    color: {
      dark: '#111B3E',
      light: '#D0D0D0',
      blue: '#0C3DEA',
      yellow: '#F7FF9F',
    }
  }
})

configure(hypostyle)

export const globalStyle = hypostyle.createGlobal({
  'html, body': {
    p: 0,
    m: 0,
    ff: 'sans',
    c: 'dark'
  },
  'h1, h2, h3, h4, h5, h6, p': {
    m: 0,
  },
  a: {
    c: 'blue',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
})
