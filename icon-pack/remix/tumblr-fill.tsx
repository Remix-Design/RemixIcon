import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.27051 7.62976C8.86829 7.07312 10.816 4.76401 10.816 2H13.8463V7.15152H17.4826V10.7879H13.8463V16.2424C13.8463 16.7566 14.044 17.4493 14.7554 17.9091C15.2296 18.2156 16.2397 18.3671 17.7857 18.3636V22H13.5432C11.0329 22 8.99778 19.9649 8.99778 17.4545V10.7879H6.27051V7.62976Z" />
    </Svg>
  )
}

Icon.displayName = 'TumblrFill'

/**
 * Remix Icon: Tumblr Fill
 * @see {@link https://remixicon.com/icon/tumblr-fill Remix Icon Docs}
 */
export const TumblrFill = memo(Icon)
