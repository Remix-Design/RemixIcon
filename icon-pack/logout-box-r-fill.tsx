import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5ZM15 16L20 12L15 8V11H9V13H15V16Z" />
    </Svg>
  )
}

Icon.displayName = 'LogoutBoxRFill'

/**
 * Remix Icon: Logout Box R Fill
 * @see {@link https://remixicon.com/icon/logout-box-r-fill Remix Icon Docs}
 */
export const LogoutBoxRFill = memo(Icon)
