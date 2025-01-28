import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 17.9381C7.05369 17.446 4 14.0796 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.0796 16.9463 17.446 13 17.9381V21H11V17.9381ZM5 22H19V24H5V22Z" />
    </Svg>
  )
}

Icon.displayName = 'MapPin4Fill'

/**
 * Remix Icon: Map Pin 4 Fill
 * @see {@link https://remixicon.com/icon/map-pin-4-fill Remix Icon Docs}
 */
export const MapPin4Fill = memo(Icon)
