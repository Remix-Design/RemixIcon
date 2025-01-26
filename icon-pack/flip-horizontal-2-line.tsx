import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 19H19V5H5V19ZM3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4ZM10 8V11H14V8L18 12L14 16V13H10V16L6 12L10 8Z" />
    </Svg>
  )
}

Icon.displayName = 'FlipHorizontal2Line'

/**
 * Remix Icon: Flip Horizontal 2 Line
 * @see {@link https://remixicon.com/icon/flip-horizontal-2-line Remix Icon Docs}
 */
export const FlipHorizontal2Line = memo(Icon)
