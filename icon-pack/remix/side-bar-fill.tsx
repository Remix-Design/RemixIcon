import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM9 5V19H20V5H9Z" />
    </Svg>
  )
}

Icon.displayName = 'SideBarFill'

/**
 * Remix Icon: Side Bar Fill
 * @see {@link https://remixicon.com/icon/side-bar-fill Remix Icon Docs}
 */
export const SideBarFill = memo(Icon)
