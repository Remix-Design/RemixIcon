import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.50098 11V16H15.501V11H21.001V21H3.00098V11H8.50098ZM15.501 3V8H8.50098V3H15.501Z" />
    </Svg>
  )
}

Icon.displayName = 'UnsplashFill'

/**
 * Remix Icon: Unsplash Fill
 * @see {@link https://remixicon.com/icon/unsplash-fill Remix Icon Docs}
 */
export const UnsplashFill = memo(Icon)
