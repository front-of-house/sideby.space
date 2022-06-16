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
      <Box f jcb abs left top right bg={variant.bg} c={variant.c} h={30} lh='30px' px={2} cx={{ borderBottom: '1px solid', borderColor: 'currentColor' }}>
        <Box>
          <Box db as='a' href='https://goo.gl/maps/zi7fzJ4yZUFcW81u6' target='_blank'>3711 N Ravenswood Ave, Chicago</Box>
        </Box>
        <Box d={['none', 'block']}>
          <Box db as='a' href='mailto:hi@sideby.space?subject=Hey%20hello%20hi' target='_blank'>hi@sideby.space</Box>
        </Box>
      </Box>

      <Box px={8}>
        {/* <LogoOutline abs cover c='green' width='80%' ma z={0} /> */}
        <Lockup counter={hypostyle.theme.tokens.color[variant.counter]} width={['175px', '200px', '250px']} rel z={1} />

        <Box db as='a' href='mailto:hi@sideby.space?subject=Hey%20hello%20hi' target='_blank' caps abs top={['10%', '10%', '15%']} left='15%' w='120px'>
          Stop by for a beer
          <ArrowTopRight width='20px' di />
        </Box>
        <Box db as='a' href='https://front-of-house.notion.site/Side-By-Side-26ca3618b5784272b7dfe3517c4fc0fd' target='_blank' caps abs top='80%' left={['45%', '45%', '25%']} w='120px'>
          Learn more about us
          <ArrowTopRight width='20px' di />
        </Box>
        <Box db as='a' href='https://www.instagram.com/sideby.space/' target='_blank' caps abs top={['20%', '20%', '40%']} left={['55%', '55%', '75%']} w='140px'>
          Check out the Instagram
          <ArrowTopRight width='20px' di />
        </Box>
      </Box>

      <Box abs left bottom right bg={variant.bg} c={variant.c} h={30} lh='30px' cx={{ whiteSpace: 'nowrap', overflow: 'hidden', borderTop: '1px solid', borderColor: 'currentColor' }}>
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
      title: 'Side By Side',
      description: 'A shared workspace in North Center, Chicago.',
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
