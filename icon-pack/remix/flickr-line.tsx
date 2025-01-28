import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.99998 17C8.76146 17 11 14.7615 11 12 11 9.23899 8.76146 7 5.99998 7 3.23849 7 1 9.23899 1 12 1 14.7615 3.23849 17 5.99998 17ZM8.99995 12C8.99995 13.6569 7.65689 15 5.99998 15 4.34306 15 3 13.6569 3 12 3 10.3434 4.34319 9 5.99998 9 7.65676 9 8.99995 10.3434 8.99995 12ZM18 17C20.7615 17 23 14.7615 23 12 23 9.23899 20.7615 7 18 7 15.2385 7 13 9.23899 13 12 13 14.7615 15.2385 17 18 17ZM21 12C21 13.6569 19.6569 15 18 15 16.3431 15 15 13.6569 15 12 15 10.3434 16.3432 9 18 9 19.6568 9 21 10.3434 21 12Z" />
    </Svg>
  )
}

Icon.displayName = 'FlickrLine'

/**
 * Remix Icon: Flickr Line
 * @see {@link https://remixicon.com/icon/flickr-line Remix Icon Docs}
 */
export const FlickrLine = memo(Icon)
