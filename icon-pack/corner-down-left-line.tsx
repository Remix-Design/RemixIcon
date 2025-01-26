import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.0001 13.9999L19.0002 5L17.0002 4.99997L17.0001 11.9999L6.8283 12L10.778 8.05024L9.36382 6.63603L2.99986 13L9.36382 19.364L10.778 17.9497L6.82826 14L19.0001 13.9999Z" />
    </Svg>
  )
}

Icon.displayName = 'CornerDownLeftLine'

/**
 * Remix Icon: Corner Down Left Line
 * @see {@link https://remixicon.com/icon/corner-down-left-line Remix Icon Docs}
 */
export const CornerDownLeftLine = memo(Icon)
