import { h } from 'hyposcript'
import { html } from '@presta/html'
import { Box } from 'hypobox'

import * as head from '@/site/head'
import { hypostyle, globalStyle } from '@/site/theme'
import { Logo } from '@/site/components/Logo'
import { Lockup } from '@/site/components/Lockup'
import { LogoOutline } from '@/site/components/LogoOutline'
import { ArrowTopRight } from '@/site/components/ArrowTopRight'

const variants = [
  { bg: 'light', c: 'blue', counter: 'light' },
  { bg: 'light', c: 'dark', counter: 'blue' },
  { bg: 'light', c: 'green', counter: 'dark' },
  { bg: 'light', c: 'blue', counter: 'yellow' },
  { bg: 'light', c: 'green', counter: 'yellow' },

  { bg: 'blue', c: 'yellow', counter: 'blue' },
  { bg: 'blue', c: 'light', counter: 'dark' },
  { bg: 'blue', c: 'dark', counter: 'light' },
  { bg: 'blue', c: 'yellow', counter: 'dark' },

  { bg: 'dark', c: 'light', counter: 'dark' },
  { bg: 'dark', c: 'yellow', counter: 'light' },
  { bg: 'dark', c: 'light', counter: 'blue' },

  { bg: 'green', c: 'dark', counter: 'green' },
  { bg: 'green', c: 'dark', counter: 'light' },
  { bg: 'green', c: 'yellow', counter: 'green' },
  { bg: 'green', c: 'light', counter: 'blue' },
]

function rand(min, max){
  return Math.floor(Math.random()*(max-min) + min)
}

let last = 0

function Page() {
  // const variant = variants[variants.length - 1]
  const variant = (() => {
    let i = rand(0, variants.length)
    while (i === last) i = rand(0, variants.length)
    last = i
    return variants[i]
  })()

  return (
    <Box f aic jcc bg={variant.bg} c={variant.c} style={{ height: '100vh' }}>
      <Box px={8}>
        {/* <LogoOutline abs cover c='green' width='80%' ma z={0} /> */}
        <Lockup counter={hypostyle.theme.tokens.color[variant.counter]} width='250px' rel z={1} />

        <Box db as='a' href='mailto:hi@side-side.xyz?subject=Hey%20hello%20hi' caps abs top={['5%', '5%', '10%']} left='15%' w='120px'>
          Stop by for a beer
          <ArrowTopRight width='20px' di />
        </Box>
        <Box db as='a' href='https://front-of-house.notion.site/Side-By-Side-26ca3618b5784272b7dfe3517c4fc0fd' caps abs top='80%' left={['45%', '45%', '25%']} w='120px'>
          Learn more about us
          <ArrowTopRight width='20px' di />
        </Box>
        <Box db as='a' href='https://www.instagram.com/side.side.xyz/' caps abs top={['15%', '15%', '40%']} left={['55%', '55%', '75%']} w='140px'>
          Check out the Instagram
          <ArrowTopRight width='20px' di />
        </Box>
      </Box>

      <Box abs left bottom right bg={variant.bg} c={variant.c} h={24} lh='24px' cx={{ whiteSpace: 'nowrap', overflow: 'hidden', borderTop: '1px solid', borderColor: 'currentColor' }}>
        {Array(40).fill(0).map(() => (
          <Box as='span' rel px='2px'>SIDE BY</Box>
        ))}
      </Box>
    </Box>
  )
}

export const route = '/'

export async function handler() {
  const body = <Page />
  const css = hypostyle.flush()

  return html({
    head: {
      title: 'side by side',
      description: 'A creative workspace in North Center, Chicago',
      image: '/og.png',
      twitter: {
        card: 'summary_large_card',
      },
      link: head.link,
      style: [
        { children: globalStyle + css },
      ],
    },
    body,
    foot: {
      script: head.script
    }
  })
}


