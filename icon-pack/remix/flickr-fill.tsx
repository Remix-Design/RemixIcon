import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 12C11 14.7615 8.76146 17 5.99998 17 3.23849 17 1 14.7615 1 12 1 9.23899 3.23849 7 5.99998 7 8.76146 7 11 9.23899 11 12ZM23 12C23 14.7615 20.7615 17 18 17 15.2385 17 13 14.7615 13 12 13 9.23899 15.2385 7 18 7 20.7615 7 23 9.23899 23 12Z" />
    </Svg>
  )
}

Icon.displayName = 'FlickrFill'

/**
 * Remix Icon: Flickr Fill
 * @see {@link https://remixicon.com/icon/flickr-fill Remix Icon Docs}
 */
export const FlickrFill = memo(Icon)
