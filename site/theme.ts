import { hypostyle as hypo } from 'hypostyle'
import * as presets from 'hypostyle/presets'
import { configure } from 'hypobox'

export const hypostyle = hypo({
  ...presets,
  tokens: {
    ...presets.tokens,
    fontFamily: {
      sans: `'Inter', sans-serif`,
    },
    color: {
      dark: '#242E2C',
      green: '#588467',
      yellow: '#FCC768',
      light: '#E2EFF3',
      blue: '#0D4C6D',
    }
  },
  macros: {
    ...presets.macros,
    caps: {
      textTransform: 'uppercase'
    },
    cover: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
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
    c: 'currentColor',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
})
