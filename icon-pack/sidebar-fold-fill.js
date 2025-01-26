import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H13V3ZM15 21V3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15ZM11 8.5V15.5L7 12L11 8.5Z" />
    </Svg>
  )
}

Icon.displayName = 'SidebarFoldFill'

/**
 * Remix Icon: Sidebar Fold Fill
 * @see {@link https://remixicon.com/icon/sidebar-fold-fill Remix Icon Docs}
 */
export const SidebarFoldFill = memo(Icon)
