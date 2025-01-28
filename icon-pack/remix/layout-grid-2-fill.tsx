import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 3C2.44772 3 2 3.44772 2 4V8L7.5 8V3H3ZM9.5 3V8H14.5V3H9.5ZM16.5 3V8H22V4C22 3.44772 21.5523 3 21 3H16.5ZM22 10H16.5V14H22V10ZM22 16H16.5V21H21C21.5523 21 22 20.5523 22 20V16ZM14.5 21V16H9.5V21H14.5ZM7.5 21V16H2V20C2 20.5523 2.44772 21 3 21H7.5ZM2 14H7.5V10L2 10V14ZM9.5 10H14.5V14H9.5V10Z" />
    </Svg>
  )
}

Icon.displayName = 'LayoutGrid2Fill'

/**
 * Remix Icon: Layout Grid 2 Fill
 * @see {@link https://remixicon.com/icon/layout-grid-2-fill Remix Icon Docs}
 */
export const LayoutGrid2Fill = memo(Icon)
