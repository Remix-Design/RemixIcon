import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20ZM11 13H5V19H11V13ZM13 19H19V5H13V19ZM11 5H5V11H11V5Z" />
    </Svg>
  )
}

Icon.displayName = 'Layout4Line'

/**
 * Remix Icon: Layout 4 Line
 * @see {@link https://remixicon.com/icon/layout-4-line Remix Icon Docs}
 */
export const Layout4Line = memo(Icon)
