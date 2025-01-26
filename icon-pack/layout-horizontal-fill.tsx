import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM7 9V7H17V9H7ZM7 13V11H17V13H7ZM17 17H7V15H17V17Z" />
    </Svg>
  )
}

Icon.displayName = 'LayoutHorizontalFill'

/**
 * Remix Icon: Layout Horizontal Fill
 * @see {@link https://remixicon.com/icon/layout-horizontal-fill Remix Icon Docs}
 */
export const LayoutHorizontalFill = memo(Icon)
