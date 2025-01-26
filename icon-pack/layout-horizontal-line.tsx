import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 19H19V5H5V19ZM3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4ZM7 9H17V7H7V9ZM17 13H7V11H17V13ZM7 17H17V15H7V17Z" />
    </Svg>
  )
}

Icon.displayName = 'LayoutHorizontalLine'

/**
 * Remix Icon: Layout Horizontal Line
 * @see {@link https://remixicon.com/icon/layout-horizontal-line Remix Icon Docs}
 */
export const LayoutHorizontalLine = memo(Icon)
