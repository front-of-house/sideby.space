import { h } from 'hyposcript'
import { html } from '@presta/html'
import { Box } from 'hypobox'

import * as head from '@/site/head'
import { hypostyle, globalStyle } from '@/site/theme'

function Page() {
  return (
    <Box f fw style={{ height: '100vh' }}>
      <Box w={[1, 1, 1, 1/2]} h f aic jcc rel z={1} bg='white'>
        <Box p={[6, 8, 10, 12]}>
          <Box maxWidth='480px' mxa>
            <Box as='h1' rel fs='48px' w='auto' dib lh='1.0' mb={10} ff='man'>
              <Box as='span' rel z={1}>
                side x side
              </Box>
              <Box abs left right bottom h='50%' bg='yellow' z={0} />
            </Box>

            <Box as='p' fs='18px' lh='26px'>
              We’re a crew of friendly neighbors bringing together our passions and professions within a shared workspace in North Center, Chicago.<br /><br />

              Whether commiserating across industries or sharing a drink, we’re here to do the work and have some fun, side by side. Plus it’s nice to be out of the house.<br /><br />

              Give us a knock. We probably have snacks.
            </Box>

            <Box f aic jcb mt={[48, 56, 64, 96]} pt={6} cx={theme => ({
                borderTop: '1px solid',
                borderColor: 'light',
                textTransform: 'uppercase'
            })}>
              <Box as='h6' fs='15px' lh='1.0' c='light'>Current Residents</Box>
              <Box as='p' fs='15px' lh='1.0' fw='bold'>
                <a href='https://estrattonbailey.com/' target='_blank'>Eric</a>
              </Box>
              <Box as='p' fs='15px' lh='1.0' fw='bold'>
                <a href='https://mel.studio/' target='_blank'>Mel</a>
              </Box>
              <Box as='p' fs='15px' lh='1.0' fw='bold'>
                <a href='https://www.instagram.com/jonkoob/' target='_blank'>Jon</a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box id='bg' fix top bottom left right w h bg='yellow' z={0} style={{ overflow: 'hidden' }}>
        {new Array(16).fill(1).map((_, i) => (
          <Box
            w='calc(100% + 180px)'
            h='calc(var(--bg-height) / 16)'
            bg='url("/side_by.svg")'
            className='marquee-element js-marqy'
            style={{
              backgroundRepeat: 'repeat-x',
              backgroundSize: 'contain',
              transform: i % 2 === 0 ? `translateX(-180px)` : 0
            }}
          />
        ))}
      </Box>
    </Box>
  )
}

export function getStaticPaths() {
  return ['/']
}

export async function handler() {
  const body = <Page />
  const css = hypostyle.flush()

  return html({
    head: {
      title: 'side x side',
      description: 'A crew of friendly neighbors bringing together our passions and professions in a shared workspace',
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
