import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.58341 17.3211C8.55316 16.2274 8 15 8 13.0103C8 9.51086 10.4565 6.37366 14.0306 4.82318L14.9233 6.20079C11.588 8.00539 10.9362 10.346 10.6756 11.822C11.2126 11.5443 11.9156 11.4466 12.6047 11.5105C14.4091 11.6778 15.8312 13.159 15.8312 15C15.8312 16.933 14.2642 18.5 12.3312 18.5C11.2581 18.5 10.232 18.0095 9.58341 17.3211Z" />
    </Svg>
  )
}

Icon.displayName = 'SingleQuotesL'

/**
 * Remix Icon: Single Quotes L
 * @see {@link https://remixicon.com/icon/single-quotes-l Remix Icon Docs}
 */
export const SingleQuotesL = memo(Icon)
