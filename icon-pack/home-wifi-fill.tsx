import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM7 11V13C9.76142 13 12 15.2386 12 18H14C14 14.134 10.866 11 7 11ZM7 15V18H10C10 16.3431 8.65685 15 7 15Z" />
    </Svg>
  )
}

Icon.displayName = 'HomeWifiFill'

/**
 * Remix Icon: Home Wifi Fill
 * @see {@link https://remixicon.com/icon/home-wifi-fill Remix Icon Docs}
 */
export const HomeWifiFill = memo(Icon)
