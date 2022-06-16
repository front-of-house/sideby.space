import { h } from 'hyposcript'
import { Box, BoxProps } from 'hypobox'

export function Lockup(props: BoxProps) {
  return (
    <Box as='svg' {...props} viewBox="0 0 396.1 524.4"><style>{`.st5{fill:currentColor}.st13{fill:${props.counter}}`}</style><path class="st13" d="M218.6 84c-11.1 0-20.5 15.3-20.5 45.6 0 38.7 10 61.6 25.3 61.6 5 0 10-2.4 14.5-7.1V118c-.1-18.2-6.1-34-19.3-34zM66.5 247.5c-5.3 0-10.3 2.4-14.8 7.4v65.8c0 21.3 6.3 34 19.2 34 11.1 0 20.5-14.5 20.5-45.6.1-39.5-10.2-61.6-24.9-61.6zM337.1 84c-8.7 0-14.2 18.2-14.2 44.5v4.7l27.9-11.1c-.2-22-6.3-38.1-13.7-38.1zM218.6 387c-11.1 0-20.5 15.3-20.5 45.6 0 38.7 10 61.6 25.3 61.6 5 0 10-2.4 14.5-7.1V421c-.1-18.2-6.1-34-19.3-34zM337.1 387c-8.7 0-14.2 18.2-14.2 44.5v4.7l27.9-11.1c-.2-22.1-6.3-38.1-13.7-38.1z"/><g><path class="st5" d="M128.5 57.6c13.2 0 22.1-10.3 22.1-22.4s-9-22.1-22.1-22.1c-13.2 0-22.1 10-22.1 22.1s8.9 22.4 22.1 22.4zM105.6 209.1h47.7c-4.2-4.5-6.6-11.3-6.6-19.8V75l-41.1 7.6c4.2 4 6.8 12.1 6.8 21.3v85.3c0 8.6-2.6 15.7-6.8 19.9zM272.1 190.1V9.7L231 17.3c4.5 4 6.8 12.1 6.8 21.3v41.1c-4.7-3.7-10.3-6.1-19-6.1-31.6 0-56.4 30.6-56.4 72.4 0 40.8 19 65.1 43.7 65.1 14.8 0 26.1-8.7 33.2-21.1l.3 19h39.2c-4.4-3.6-6.7-10.4-6.7-18.9zm-34.3-6c-4.5 4.7-9.5 7.1-14.5 7.1-15.3 0-25.3-22.9-25.3-61.6 0-30.3 9.5-45.6 20.5-45.6 13.2 0 19.2 15.8 19.2 34v66.1zM340.3 211.7c28.4 0 46.4-18.7 48.5-52.9h-1.1c-5 19.5-16.3 30-30.6 30-18.7 0-30.6-16.6-33.5-45.6l62.2-22.7c-4.2-30-20.8-47.4-45.6-47.4-29.8 0-52.7 30.8-52.7 71.9.1 40.1 21.7 66.7 52.8 66.7zm-17.4-83.2c0-26.3 5.5-44.5 14.2-44.5 7.4 0 13.4 16.1 13.7 38.2l-27.9 11.1v-4.8zM17.5 342.1c0 7.9-1.6 13.7-5.5 20.3l.5.5c6.3-2.4 14.5-3.7 22.4-3.7 8.7 0 15.3 1.8 24.2 4.2 4 1.1 7.4 1.6 12.4 1.6 31.9 0 55.6-31.3 55.6-71.6 0-41.1-18.7-65.8-42.9-65.8-14.2 0-25 7.4-32.4 18.7v-68.9l-.7.1-38.7 7.2-1.7.3c4.5 4 6.8 11.3 6.8 21.3V342.1zm34.2-87.2c4.5-5 9.5-7.4 14.8-7.4 14.8 0 25 22.1 25 61.6 0 31.1-9.5 45.6-20.5 45.6-12.9 0-19.2-12.6-19.2-34v-65.8zM272.1 493.1V312.7l-41.1 7.6c4.5 4 6.8 12.1 6.8 21.3v41.1c-4.7-3.7-10.3-6.1-19-6.1-31.6 0-56.4 30.6-56.4 72.4 0 40.8 19 65.1 43.7 65.1 14.8 0 26.1-8.7 33.2-21.1l.3 19h39.2c-4.4-3.6-6.7-10.5-6.7-18.9zm-34.3-6.1c-4.5 4.7-9.5 7.1-14.5 7.1-15.3 0-25.3-22.9-25.3-61.6 0-30.3 9.5-45.6 20.5-45.6 13.2 0 19.2 15.8 19.2 34V487zM357.2 491.8c-18.7 0-30.6-16.6-33.5-45.6l62.2-22.7c-4.2-30-20.8-47.4-45.6-47.4-29.8 0-52.7 30.8-52.7 71.9 0 40 21.6 66.6 52.7 66.6 28.4 0 46.4-18.7 48.5-52.9h-1.1c-5 19.5-16.3 30.1-30.5 30.1zm-34.3-60.3c0-26.3 5.5-44.5 14.2-44.5 7.4 0 13.4 16.1 13.7 38.2l-27.9 11.1v-4.8z"/><path class="st5" d="M186.2 357.7 224.7 242c2.1-7.1 4.7-12.6 9.2-17.4h-29.5c6.1 6.3 6.3 13.4 4 20.8L187.2 320l-24-74.7c-3.2-8.4-2.6-15 3.7-20.5h-50.6c4.7 5 8.2 10.5 10.3 16.6l43.7 120.4c-6.1 16.9-12.4 25.1-24.8 25.1-10.3 0-19.9-8.4-24.9-18.7 0 0-6.8 12.1-18.1 22.7 0 0 12 21 38 21 21.9 0 35.1-29.1 40-39.8l5.7-14.4zM69.8 430.7l-11.6-6.3C39.5 414.7 35 409.4 35 401c0-7.6 6.1-14 15.8-14 11.9 0 24.2 6.8 39.8 36.6h.5L89 377.7 79 384c-7.1-4.2-15.3-7.9-27.4-7.9-25.6 0-42.9 16.6-42.9 40.3 0 16.1 7.4 28.4 25.8 37.9l12.4 6.6c17.6 9.5 22.1 15.8 22.1 25.6 0 10-6.3 17.1-18.4 17.1-14.5 0-28.7-10-42.9-43.5h-.4L9.9 513l10-7.1c7.9 4.7 17.6 8.7 29.8 8.7 28.4 0 45.8-17.9 45.8-42.4.1-18.9-7-31.5-25.7-41.5zM34.5 151.4l12.4 6.6c1.5.8 2.9 1.6 4.2 2.4.2.1.5.3.7.4 13.6 8 17.2 14 17.2 22.8 0 7.8-3.8 13.8-11.2 16.1v11.6c23.7-3.1 37.8-19.8 37.8-41.9 0-19-7.1-31.6-25.8-41.6l-11.6-6.3c-18.7-9.7-23.2-15-23.2-23.4 0-7.6 6.1-14 15.8-14 11.9 0 24.2 6.8 39.8 36.6h.5L89 74.8l-10 6.3c-7.1-4.2-15.3-7.9-27.4-7.9-25.6 0-42.9 16.6-42.9 40.3 0 16.1 7.3 28.4 25.8 37.9zM146.7 417.1c-1.9.4-4 .6-6.1.6-12 0-21.3-3.9-28.2-8.6v83.1c0 8.4-2.6 15.5-6.8 19.8h47.7c-4.2-4.5-6.6-11.3-6.6-19.8v-75.1z"/></g></Box>
  )
}
