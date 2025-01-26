import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.99989 13.9999L4.99976 5L6.99976 4.99997L6.99986 11.9999L17.1717 12L13.222 8.05024L14.6362 6.63603L21.0001 13L14.6362 19.364L13.222 17.9497L17.1717 14L4.99989 13.9999Z" />
    </Svg>
  )
}

Icon.displayName = 'CornerDownRightLine'

/**
 * Remix Icon: Corner Down Right Line
 * @see {@link https://remixicon.com/icon/corner-down-right-line Remix Icon Docs}
 */
export const CornerDownRightLine = memo(Icon)
