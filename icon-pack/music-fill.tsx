import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 13.5351V3H20V6H14V17C14 19.2091 12.2091 21 10 21C7.79086 21 6 19.2091 6 17C6 14.7909 7.79086 13 10 13C10.7286 13 11.4117 13.1948 12 13.5351Z" />
    </Svg>
  )
}

Icon.displayName = 'MusicFill'

/**
 * Remix Icon: Music Fill
 * @see {@link https://remixicon.com/icon/music-fill Remix Icon Docs}
 */
export const MusicFill = memo(Icon)
